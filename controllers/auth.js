import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
	const q = "SELECT * FROM users WHERE username = ?";

	db.query(q, [req.body.username], (err, data) => {
		if (err) return res.status(500).json({ message: err.message });
		if (data.length)
			return res.status(409).json({ message: "user already exists" });

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(req.body.password, salt);

		const q =
			"INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)";

		db.query(
			q,
			[req.body.username, req.body.email, hashedPassword, req.body.name],
			(err, data) => {
				if (err) return res.status(500).json({ message: err.message });
				return res
					.status(200)
					.json({ message: "User created successfully" });
			}
		);
	});
};

export const logIn = (req, res) => {
	const q = "SELECT * FROM users WHERE username = ?";

	db.query(q, [req.body.username], (err, data) => {
		if (err) return res.status(500).json({ message: err.message });
		if (data.length === 0)
			return res.status(404).json({ message: "User not found" });

		const checkPassword = bcrypt.compareSync(
			req.body.password,
			data[0].password
		);
		if (!checkPassword)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ id: data[0].id }, "socialToken");

		const { password, ...otherData } = data[0];

		res.cookie("accessToken", token, {
			httpOnly: true,
		})
			.status(200)
			.json(otherData);
	});
};

export const logOut = (req, res) => {
	res.clearCookie("accessToken", {
		secure: true,
		sameSite: "none",
	})
		.status(200)
		.json({ message: "User successfully logged out" });
};
