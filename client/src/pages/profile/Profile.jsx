import {
	Avatar,
	Box,
	Divider,
	Link,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import Posts from "../../components/posts/Posts";
import {
	ApartmentRounded,
	CakeRounded,
	EmailRounded,
	PublicRounded,
	SchoolRounded,
} from "@mui/icons-material";

const userData = {
	username: "snowman_619",
	name: "Artic Snowman",
	profilePic: "/profile.png",
	coverPic:
		"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	description:
		"A snowman stands proudly, crafted from three snowballs of ascending size, adorned with a carrot nose, coal eyes, and a wide grin made of small stones. Wearing a vibrant scarf and a top hat, it exudes charm amidst the winter landscape. Its stick arms reach outward in a welcoming gesture, while snowflakes gently settle on its rounded form. A symbol of seasonal joy, the snowman brings a whimsical touch to the serene, snowy scene.",
	city: "Artic Circle",
	email: "snowman619@gmail.com",
	dateOfBirth: "01-01-2000",
	country: "North Pole",
	studiedAt: "Artic Freezing School",
};

export default function Profile() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				height: "calc(100vh - 50px)",
				padding: "10px 70px",
				marginBottom: "30px",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "300px",
					position: "relative",
					borderRadius: "10px",
				}}
			>
				<img
					src={userData.coverPic}
					alt="user cover"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "10px",
					}}
				/>
				<div
					className="backdrop"
					style={{
						position: "absolute",
						background: "rgba(0,0,0, 0.3)",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: 1,
					}}
				></div>
				<Avatar
					src={userData.profilePic}
					alt="user profile"
					sx={{
						width: "200px",
						height: "200px",
						position: "absolute",
						top: "150px",
						right: 0,
						left: 0,
						margin: "auto",
						zIndex: 2,
						border: `5px solid ${theme.palette.background[900]}`,
					}}
				/>
			</Box>

			<Box
				sx={{
					background: theme.palette.background[800],
					marginTop: 1,
					padding: "50px 30px 10px 30px",
					borderRadius: "10px",
					color: theme.palette.text[100],
				}}
			>
				<Box display="flex" justifyContent="center" width="100%">
					<Typography
						variant="h6"
						sx={{ "&:hover": { textDecorationLine: "underline" } }}
					>
						@{userData.username}
					</Typography>
				</Box>
				<Typography
					variant="h6"
					sx={{ textTransform: "capitalize" }}
					gutterBottom
				>
					{userData.name}
				</Typography>

				<Typography
					variant="body2"
					sx={{ opacity: 0.8, textAlign: "justify" }}
					marginBottom={2}
				>
					{userData.description}
				</Typography>

				<Divider sx={{ borderColor: theme.palette.grey[700] }} />
				<Stack
					direction="row"
					justifyContent="space-between"
					marginY={2}
				>
					<Stack direction={"column"} spacing={1}>
						<Stack
							direction={"row"}
							spacing={1}
							alignItems={"center"}
						>
							<Avatar
								sx={{ background: theme.palette.grey[800] }}
								variant="rounded"
							>
								<EmailRounded sx={{ opacity: 0.6 }} />
							</Avatar>
							<Typography variant="body1">
								{userData.email}
							</Typography>
						</Stack>
						<Stack
							direction={"row"}
							spacing={1}
							alignItems={"center"}
						>
							<Avatar
								sx={{ background: theme.palette.grey[800] }}
								variant="rounded"
							>
								<ApartmentRounded sx={{ opacity: 0.6 }} />
							</Avatar>
							<Typography variant="body1">
								{userData.city}
							</Typography>
						</Stack>
						<Stack
							direction={"row"}
							spacing={1}
							alignItems={"center"}
						>
							<Avatar
								sx={{ background: theme.palette.grey[800] }}
								variant="rounded"
							>
								<PublicRounded sx={{ opacity: 0.6 }} />
							</Avatar>
							<Typography variant="body1">
								{userData.country}
							</Typography>
						</Stack>
						<Stack
							direction={"row"}
							spacing={1}
							alignItems={"center"}
						>
							<Avatar
								sx={{ background: theme.palette.grey[800] }}
								variant="rounded"
							>
								<SchoolRounded sx={{ opacity: 0.6 }} />
							</Avatar>
							<Typography variant="body1">
								{userData.studiedAt}
							</Typography>
						</Stack>
						<Stack
							direction={"row"}
							spacing={1}
							alignItems={"center"}
						>
							<Avatar
								sx={{ background: theme.palette.grey[800] }}
								variant="rounded"
							>
								<CakeRounded sx={{ opacity: 0.6 }} />
							</Avatar>
							<Typography variant="body1">
								{userData.dateOfBirth}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Box>

			<Posts />
		</Box>
	);
}
