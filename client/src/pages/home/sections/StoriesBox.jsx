import { AddCircleRounded } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";

const stories = [
	{
		id: 1,
		label: "Waterfall 😮",
		img: "https://images.unsplash.com/photo-1708913156364-b454d4e3f6a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		label: "Brown Bear",
		img: "https://images.unsplash.com/photo-1707391474687-6fbda271617d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		label: "Too Cold here",
		img: "https://images.unsplash.com/photo-1707391464182-dda2c341ba74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		label: "Beautiful bouquet",
		img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	},
];

export default function StoriesBox() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				height: "250px",
                marginTop: "10px",
				marginBottom: "30px",
			}}
		>
			<Box
				className="add_new_story"
				sx={{
                    flex: 1,
					borderRadius: "10px",
					overflow: "hidden",
					position: "relative",
				}}
			>
				<img
					src="/profile.png"
					alt="user_img"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
				<IconButton
					sx={{
						position: "absolute",
						bottom: 1,
						left: 0,
						color: theme.palette.primary[700],
					}}
				>
					<AddCircleRounded fontSize="large" />
				</IconButton>
			</Box>

			{stories.map((s) => (
				<Box
					key={s.id}
					className="add_new_story"
					sx={{
						flex: 1,
						borderRadius: "10px",
						overflow: "hidden",
						position: "relative",
					}}
				>
					<img
						src={s.img}
						alt="user_img"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
					<Typography
						sx={{
							position: "absolute",
							bottom: 0,
							left: 0,
                            right: 0,
							color: theme.palette.text[100],
                            // background: theme.palette.grey[900],
                            padding: '0 0 0 3px '
						}}
					>
						{s.label}
					</Typography>
				</Box>
			))}
		</Box>
	);
}
