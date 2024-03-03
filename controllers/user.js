import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
	const userId = req.params.userId;
	const q = "SELECT * FROM users WHERE id = ?";

	db.query(q, [userId], (err, data) => {
		if (err) return res.status(500).json({ message: err.message });
		if (data.length == 0)
			return res.status(404).json({ message: "User not found" });

		const { password, ...info } = data[0];
		return res.status(200).json(info);
	});
};

export const updateUser = (req, res) => {
	const token = req.cookies.accessToken;
	if (!token)
		return res
			.status(401)
			.json({ message: "Not authorized to update user! Login first" });

	jwt.verify(token, "socialToken", (err, userInfo) => {
		if (err) return res.status(403).json({ message: "Token is invalid!" });

		const q =
			"UPDATE users SET `username` = ?, `name` = ?, `coverPic` = ?, `profilePic` = ?, `city` = ?, `description` = ? WHERE id = ?";

		db.query(
			q,
			[
				req.body.username,
				req.body.name,
				req.body.coverPic,
				req.body.profilePic,
				req.body.city,
				req.body.description,
				userInfo.id,
			],
			(err, data) => {
				if (err) return res.status(500).json({ message: err.message });

				if (data.affectedRows > 0)
					return res
						.status(200)
						.json({ message: "User updated successfully" });
				return res.status(403).json({
					message: "Not authorised! You can only update your profile",
				});
			}
		);
	});
};
