import { AppBar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const theme = useTheme();
	return (
		<AppBar
			position="fixed"
			sx={{
				width: "100%",
				height: "50px",
				padding: "18px 20px",
                background: "transparent",
                borderBottom: "1px solid",
				borderColor: theme.palette.background[600],
                display: "flex",
                alignItems: "center"
			}}
		>
			<Box className="nav_left" sx={{}}>
				<Link to="/">
					<Typography variant="h6" fontWeight={900} sx={{color: theme.palette.text[50]}}>Social Nest</Typography>
				</Link>
			</Box>
			<Box className="nav_right"></Box>
		</AppBar>
	);
}
