import {
	Avatar,
	Box,
	Button,
	Divider,
	Fade,
	InputBase,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Modal,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";

export default function CommentPopUp({ open, setOpen }) {
	const theme = useTheme();
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
		>
			<Fade in={open}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						p: 4,
						width: "40%",
						bgcolor: theme.palette.background[800],
						color: "white",
						borderRadius: "10px",
					}}
				>
					<Box width={"100%"} display="flex" gap={2} mb={3}>
						<Stack
							direction={"row"}
							spacing={3}
							flex={3}
							alignItems={"center"}
						>
							<Avatar src="/profile.png" />
							<TextField
								variant="outlined"
								fullWidth
								placeholder="Add a comment"
								sx={{ color: theme.palette.text[100] }}
							/>
						</Stack>

						<Box display="flex" alignItems="center">
							<Button
								variant="outlined"
								sx={{
									color: theme.palette.accent[500],
									borderColor: theme.palette.accent[500],
									"&:hover": {
										borderColor: theme.palette.accent[700],
										bgcolor: "transparent",
									},
								}}
							>
								Post
							</Button>
						</Box>
					</Box>

					<Divider
						sx={{ borderColor: theme.palette.grey[700] }}
						variant="fullWidth"
					/>

					<Stack direction={"row"} spacing={3} my={2}>
						<Avatar src="/profile2.png" />
						<Stack
							direction={"column"}
							spacing={2}
							sx={{ color: theme.palette.text[100] }}
						>
							<Stack
								direction={"row"}
								spacing={2}
								alignItems={"center"}
							>
								<Typography variant="body1">
									Robo Punk
								</Typography>
								<Typography
									variant="caption"
									sx={{ opacity: 0.7 }}
								>
									1 hour ago
								</Typography>
							</Stack>
							<Typography variant="body2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Earum, corrupti.
							</Typography>
						</Stack>
					</Stack>
				</Box>
			</Fade>
		</Modal>
	);
}
