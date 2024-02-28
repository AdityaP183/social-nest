import { Box, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import LeftBar from "../leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import RightBar from "../rightBar/RightBar";

export default function Layout() {
    const theme = useTheme()
	return (
		<Box sx={{
            width: "100%",
            height: "100%",
            background: theme.palette.background[950]
        }}>
			<Navbar />
			<div style={{ display: "flex" }}>
				<LeftBar />
				<div style={{ flex: 6 }}>
					<Outlet />
				</div>
				<RightBar />
			</div>
		</Box>
	);
}
