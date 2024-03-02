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

export default function CreatePost() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				height: "150px",
				display: "flex",
				flexDirection: "column",
				backgroundColor: theme.palette.background[800],
				padding: "10px",
				borderRadius: "10px",
				boxShadow: `0 0 5px ${theme.palette.background[800]}`,
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
					sx={{ fontSize: "15px", color: theme.palette.text[100] }}
				/>
			</Box>

			<Divider
				variant="middle"
				sx={{ borderColor: theme.palette.grey[800] }}
			/>

			<Stack direction="row" justifyContent="space-between">
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
						<Button
							color="inherit"
							startIcon={<TagRounded />}
						>
							Tag Friends
						</Button>
					</ButtonGroup>
				</Stack>
				<Button variant="contained" color="primary">
					Post
				</Button>
			</Stack>
		</Box>
	);
}
