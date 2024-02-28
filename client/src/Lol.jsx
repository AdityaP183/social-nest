import { Box, useTheme } from "@mui/material";
import React from "react";

export default function Lol() {
	const theme = useTheme();
	return (
		<Box
			width={100}
			height={150}
			sx={{
				background: theme.palette.background[50],
			}}
		>
			hello
		</Box>
	);
}
