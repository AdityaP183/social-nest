import { db } from "../db.js";
import jwt from "jsonwebtoken";
import moment from "moment";

//POST a post
export const createPost = (req, res) => {
	const token = req.cookies.accessToken;
	if (!token) return res.status(401).json({ message: "Not logged in" });

	jwt.verify(token, "socialToken", (err, userInfo) => {
		if (err)
			return res.status(403).json({ message: "Token is not valid!" });

		const q =
			"INSERT INTO posts(`description`, `img`, `createdAt`, `userId`) VALUES (?)";
		const values = [
			req.body.description,
			req.body.img,
			moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
			userInfo.id,
		];

		db.query(q, [values], (err, data) => {
			if (err) return res.status(500).json({ message: err.message });
			return res.status(200).json({ message: "Post has been created." });
		});
	});
};

//GET all posts
export const getAllPosts = (req, res) => {
	const { sort } = req.query;
	const q =
		sort === "newest"
			? "SELECT * FROM posts ORDER BY createdAt DESC"
			: "SELECT * FROM posts";

	db.query(q, (err, data) => {
		if (err) return res.status(500).json({ message: err.message });
		return res.status(200).json(data);
	});
};

export const getAllUserPosts = (req, res) => {
	const userId = req.params.userId;
	const { sort } = req.query;
	const q =
		sort === "newest"
			? "SELECT * FROM posts WHERE userId = ? ORDER BY createdAt DESC"
			: "SELECT * FROM posts WHERE userId = ?";

	db.query(q, [userId], (err, data) => {
		if (err) return res.status(500).json({ message: err.message });
		return res.status(200).json(data);
	});
};

//DELETE a post
export const deleteSinglePost = (req, res) => {
	const token = req.cookies.accessToken;
	if (!token)
		return res
			.status(403)
			.json({ message: "Not authorized to delete! Login in" });

	jwt.verify(token, "socialToken", (err, userInfo) => {
		if (err) return res.status(403).json({ message: "Token is invalid!" });

		const q = `DELETE FROM posts WHERE id = ? AND userId = ?`;

		db.query(q, [req.params.id, userInfo.id], (err, data) => {
			if (err) return res.status(500).json({ message: err.message });
			if (data.affectedRows > 0)
				return res
					.status(200)
					.json("Post has been deleted successfully");
			return res.status(403).json("You can delete only your post");
		});
	});
};
