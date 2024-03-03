import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

const api_name = "flockify";
app.get("/flockify", (req, res) => {
	res.status(200).json({ message: "Welcome to Flockify Api!" });
});
app.use(`/${api_name}/auth`, authRoutes);
app.use(`/${api_name}/users`, userRoutes);
app.use(`/${api_name}/posts`, postsRoutes);
app.use(`/${api_name}/likes`, likesRoutes);
app.use(`/${api_name}/comments`, commentsRoutes);

app.listen(8000, () => {
	console.log(`Server is running!`);
});
