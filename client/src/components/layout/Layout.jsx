import { Box, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import LeftBar from "../leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "../rightBar/RightBar";

export default function Layout({ mode }) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				background: mode
					? theme.palette.background[950]
					: theme.palette.background[900],
			}}
		>
			<Navbar />
			<div style={{ display: "flex" }}>
				<LeftBar mode={mode} />
				<Box
					className="noScrollBar"
					style={{
						flex: 6,
						width: "100%",
						height: "calc(100vh - 50px)",
						overflow: "auto",
					}}
				>
					<Outlet />
				</Box>
				<RightBar mode={mode} />
			</div>
		</Box>
	);
}
