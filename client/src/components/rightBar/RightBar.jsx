import { Delete } from "@mui/icons-material";
import { Box, List, ListSubheader, useTheme } from "@mui/material";
import React from "react";
import SuggestionBox from "./sections/SuggestionBox";
import ActivityBox from "./sections/ActivityBox";
import ActiveUserBox from "./sections/ActiveUserBox";

export default function RightBar({ mode }) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				flex: 3,
				height: "calc(100vh - 50px)",
				borderLeft: `2px solid ${
					mode
						? theme.palette.background[700]
						: theme.palette.background[500]
				}`,
				padding: "10px 20px",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<Box
				className="suggestions"
				sx={{
					width: "100%",
					background: mode
						? theme.palette.background[800]
						: theme.palette.background[700],
					borderRadius: "10px",
				}}
			>
				<List
					subheader={
						<ListSubheader
							component="div"
							id="suggestions-list"
							sx={{
								background: "transparent",
								color: theme.palette.text[100],
								paddingBottom: 0,
								fontSize: "18px",
							}}
						>
							Suggestions For You
						</ListSubheader>
					}
				>
					<SuggestionBox
						listItemColor={theme.palette.text[100]}
						name="Artic Snowman"
						avatar="/profile.png"
					/>
					<SuggestionBox
						listItemColor={theme.palette.text[100]}
						name="Robo Punk"
						avatar="/profile2.png"
					/>
				</List>
			</Box>

			<Box
				className="activites"
				sx={{
					width: "100%",
					background: mode
						? theme.palette.background[800]
						: theme.palette.background[700],
					borderRadius: "10px",
				}}
			>
				<List
					subheader={
						<ListSubheader
							component="div"
							id="suggestions-list"
							sx={{
								background: "transparent",
								color: theme.palette.text[100],
								paddingBottom: 0,
								fontSize: "18px",
							}}
						>
							Recent Activities
						</ListSubheader>
					}
				>
					<ActivityBox
						listItemColor={theme.palette.text[100]}
						name="Robo Punk"
						avatar="/profile2.png"
						activity={"uplaoded a new post"}
						timestamp={"1 min ago"}
					/>
					<ActivityBox
						listItemColor={theme.palette.text[100]}
						name="Artic Snowman"
						avatar="/profile.png"
						activity={"has his birthday today, wish him now"}
						timestamp={"2 min ago"}
					/>
					<ActivityBox
						listItemColor={theme.palette.text[100]}
						name="Robo Punk"
						avatar="/profile2.png"
						activity={"gave you a like"}
						timestamp={"4 min ago"}
					/>
					<ActivityBox
						listItemColor={theme.palette.text[100]}
						name="Robo Punk"
						avatar="/profile2.png"
						activity={"changed his cover picture"}
						timestamp={"5 min ago"}
					/>
				</List>
			</Box>

			<Box
				className="active-users"
				sx={{
					width: "100%",
					background: mode
						? theme.palette.background[800]
						: theme.palette.background[700],
					borderRadius: "10px",
				}}
			>
				<List
					subheader={
						<ListSubheader
							component="div"
							id="suggestions-list"
							sx={{
								background: "transparent",
								color: theme.palette.text[100],
								paddingBottom: 0,
								fontSize: "18px",
							}}
						>
							Active Friends
						</ListSubheader>
					}
				>
					<ActiveUserBox
						listItemColor={theme.palette.text[100]}
						avatar={"/profile2.png"}
						name={"Robo Punk"}
					/>
				</List>
			</Box>
		</Box>
	);
}
