import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

const tempPosts = [
	{
		id: 1,
		name: "Artic Snowman",
		userId: 1,
		profilePic: "/profile.png",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		img: "https://images.unsplash.com/photo-1708886383759-fb23c24db348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: '1 min ago',
        likes: 10,
        comments: 200
	},
	{
        id: 2,
		name: "Robo Punk",
		userId: 2,
		profilePic: "/profile2.png",
		desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        createdAt: '30 mins ago',
        likes: 30,
        comments: 250
	},
];

export default function Posts() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{tempPosts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</Box>
	);
}
