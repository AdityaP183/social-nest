import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";

export default function Register() {
	const theme = useTheme();
	const { darkMode } = useContext(DarkModeContext);

	const cardStyle = {
		width: "50%",
		minHeight: "600px",
		background: darkMode
			? theme.palette.background[800]
			: theme.palette.background[600],
		display: "flex",
		flexDirection: "row-reverse",
		overflow: "hidden",
		borderRadius: "10px",
	};
	const cardLeftStyle = {
		flex: 1,
		background: `linear-gradient(rgba(39, 11, 96, 0.7), rgba(39, 11, 96, 0.7)), url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600') center`,
		backgroundSize: "cover",
		width: "100%",
		padding: "50px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		gap: "30px",
		color: darkMode ? theme.palette.text[50] : theme.palette.text[900],
	};
	const cardRightStyle = {
		flex: 1,
		padding: "50px",
		display: "flex",
		flexDirection: "column",
		gap: "50px",
		justifyContent: "center",
		color: theme.palette.text[50],
	};

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				background: darkMode
					? theme.palette.background[950]
					: theme.palette.background[900],
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box className="card" sx={cardStyle}>
				<Box className="card_left" sx={cardLeftStyle}>
					<Box className="card_label">
						<Typography variant="h2" fontWeight={800} gutterBottom>
							Social Nest
						</Typography>
						<Typography variant="h6" textAlign={"justify"}>
							Welcome to Social Nest! Connect, share, and explore
							with friends in our vibrant community.
						</Typography>
					</Box>

					<Box
						className="card_actions"
						display={"flex"}
						alignItems={"center"}
						gap={2}
					>
						<Typography variant="body1">
							Already have an account
						</Typography>
						<Link to={"/login"}>
							<Button
								variant="contained"
								sx={{
									background: theme.palette.primary[700],
								}}
							>
								Login
							</Button>
						</Link>
					</Box>
				</Box>

				<Box className="card_right" sx={cardRightStyle}>
					<Typography variant="h3" fontWeight={800}>
						Register
					</Typography>
					<TextField variant="outlined" label="name" required />
					<TextField variant="outlined" label="username" required />
					<TextField
						variant="outlined"
						label="email"
						type="email"
						required
					/>
					<TextField
						variant="outlined"
						label="password"
						type="password"
						required
					/>
					<Button
						variant="outlined"
						sx={{
							borderColor: darkMode
								? theme.palette.primary[200]
								: theme.palette.primary[300],
							color: darkMode
								? theme.palette.primary[200]
								: theme.palette.primary[300],
							"&:hover": {
								borderColor: theme.palette.primary[500],
							},
							width: "50%",
							marginX: "auto",
						}}
					>
						Log In
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
