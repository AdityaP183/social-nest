import {
	BookmarkRounded,
	CollectionsRounded,
	Diversity1Rounded,
	EmojiEventsRounded,
	FavoriteRounded,
	FlagRounded,
	GroupRounded,
	SmartDisplayRounded,
	SportsEsportsRounded,
	StorefrontRounded,
	TimerRounded,
	VideocamRounded,
} from "@mui/icons-material";
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	useTheme,
} from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const quickLinksList = {
	basic: [
		{ id: "friends", label: "Friends", icon: <GroupRounded /> },
		{ id: "groups", label: "Groups", icon: <Diversity1Rounded /> },
		{
			id: "marketplace",
			label: "Marketplace",
			icon: <StorefrontRounded />,
		},
		{ id: "watch", label: "Watch", icon: <SmartDisplayRounded /> },
		{ id: "memories", label: "Memories", icon: <TimerRounded /> },
	],
	shortcuts: [
		{ id: "events", label: "Events", icon: <EmojiEventsRounded /> },
		{ id: "gaming", label: "Gaming", icon: <SportsEsportsRounded /> },
		{ id: "gallery", label: "Gallery", icon: <CollectionsRounded /> },
		{ id: "videos", label: "Videos", icon: <VideocamRounded /> },
	],
	others: [
		{ id: "favourites", label: "Favourites", icon: <FavoriteRounded /> },
		{ id: "bookmarks", label: "Bookmarks", icon: <BookmarkRounded /> },
		{ id: "pages", label: "Pages", icon: <FlagRounded /> },
	],
};

export default function LeftBar({ mode }) {
	const theme = useTheme();

	const CustomListItem = ({ link }) => {
		return (
			<ListItem
				sx={{
					color: theme.palette.text[100],
					"&:hover": {
						bgcolor: mode
							? theme.palette.background[800]
							: theme.palette.background[700],
					},
					padding: "10px",
				}}
				key={link.id}
			>
				<ListItemButton
					sx={{
						padding: "0 10px",
						fontWeight: 700,
						"&:hover": { bgcolor: "transparent" },
					}}
				>
					<ListItemIcon sx={{ color: theme.palette.primary[400] }}>
						{link.icon}
					</ListItemIcon>
					<ListItemText primary={link.label} />
				</ListItemButton>
			</ListItem>
		);
	};

	return (
		<Box
			sx={{
				flex: 2,
				height: "calc(100vh - 50px)",
				background: mode
					? theme.palette.background[900]
					: theme.palette.background[800],
				borderRight: `2px solid ${
					mode
						? theme.palette.background[700]
						: theme.palette.background[500]
				}`,
			}}
		>
			<List className="leftSidebar_basic">
				{quickLinksList.basic.map((link) => (
					<CustomListItem link={link} />
				))}
			</List>

			<Divider
				sx={{
					border: "1px solid",
					borderColor: mode
						? theme.palette.background[700]
						: theme.palette.background[500],
				}}
			/>

			<List
				className="leftSidebar_shortcuts"
				subheader={
					<ListSubheader
						component="div"
						id="your-shortcuts"
						sx={{
							background: "transparent",
							color: theme.palette.text[100],
							paddingBottom: 0,
							fontWeight: 800,
						}}
					>
						Your Shortcuts
					</ListSubheader>
				}
			>
				{quickLinksList.shortcuts.map((link) => (
					<CustomListItem link={link} />
				))}
			</List>

			<Divider
				sx={{
					border: "1px solid",
					borderColor: mode
						? theme.palette.background[700]
						: theme.palette.background[500],
				}}
			/>

			<List
				className="leftSidebar_others"
				subheader={
					<ListSubheader
						component="div"
						id="your-others"
						sx={{
							background: "transparent",
							color: theme.palette.text[100],
							paddingBottom: 0,
							fontWeight: 800,
						}}
					>
						Others
					</ListSubheader>
				}
			>
				{quickLinksList.others.map((link) => (
					<CustomListItem link={link} />
				))}
			</List>
		</Box>
	);
}
