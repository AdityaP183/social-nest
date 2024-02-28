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
			if (err) return res.status(500).json({ message: err });
			return res.status(200).json({ message: "Post has been created." });
		});
	});
};

//GET all posts
export const getAllPosts = (req, res) => {
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
};

//PATCH a post
export const updateSinglePost = (req, res) => {};

//DELETE a post
export const deleteSinglePost = (req, res) => {};
