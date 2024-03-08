import { AddLocationAltRounded, InsertPhotoRounded, TagRounded } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Divider,
	InputBase,
	Stack,
	useTheme,
} from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";

export default function CreatePost() {
	const { darkMode } = useContext(DarkModeContext);
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				height: "150px",
				display: "flex",
				flexDirection: "column",
				backgroundColor: darkMode
					? theme.palette.background[800]
					: theme.palette.background[800],
				padding: "10px",
				borderRadius: "10px",
				border: `2px solid ${
					darkMode ? theme.palette.grey[600] : theme.palette.grey[900]
				}`,
				gap: "15px",
			}}
		>
			<Box
				sx={{
					flex: 1.5,
					display: "flex",
					gap: "20px",
					alignItems: "center",
				}}
			>
				<Avatar src="/profile.png" sx={{ margin: "0 20px 0 10px" }} />
				<InputBase
					fullWidth
					placeholder="What's on your mind, Snowman?"
					sx={{
						fontSize: "15px",
						color: theme.palette.text[100],
					}}
					inputProps={{
						style: {
							color: theme.palette.text[100],
						},
					}}
				/>
			</Box>

			<Divider
				variant="middle"
				sx={{ borderColor: theme.palette.grey[800] }}
			/>

			<Stack direction="row" justifyContent="space-between" ml={"10px"}>
				<Stack direction="row" spacing="5px">
					<ButtonGroup
						variant="text"
						aria-label="Basic button group"
						sx={{ color: theme.palette.text[100] }}
					>
						<Button
							color="inherit"
							startIcon={<InsertPhotoRounded />}
						>
							Add Image
						</Button>
						<Button
							color="inherit"
							startIcon={<AddLocationAltRounded />}
						>
							Add Place
						</Button>
						<Button color="inherit" startIcon={<TagRounded />}>
							Tag Friends
						</Button>
					</ButtonGroup>
				</Stack>
				<Button
					variant="contained"
					sx={{
						background: theme.palette.primary[400],
						color: theme.palette.text[950],
						fontWeight: 700,
						"&:hover": {
							background: theme.palette.primary[600],
						},
					}}
				>
					Post
				</Button>
			</Stack>
		</Box>
	);
}
