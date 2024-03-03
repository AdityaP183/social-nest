import express from "express";
import {
	createPost,
	deleteSinglePost,
	getAllPosts,
	getAllUserPosts,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/user/:userId").get(getAllUserPosts);
router.route("/:id").delete(deleteSinglePost);

export default router