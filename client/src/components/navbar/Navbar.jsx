import {
	AppBar,
	Avatar,
	Box,
	Chip,
	IconButton,
	InputBase,
	Tooltip,
	Typography,
	useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
	AccountBoxRounded,
	ChatRounded,
	DarkModeRounded,
	HomeRounded,
	NotificationsRounded,
	SearchRounded,
} from "@mui/icons-material";

const iconsList = {
	left: [
		{ id: "home", label: "Home", icon: <HomeRounded /> },
		{ id: "theme", label: "Change Theme", icon: <DarkModeRounded /> },
		{ id: "messages", label: "Messages", icon: <ChatRounded /> },
	],
	right: [
		{ id: "profile", label: "Profile", icon: <AccountBoxRounded /> },
		{ id: "notifications", label: "Notifications", icon: <NotificationsRounded /> },
	],
};

export default function Navbar() {
	const theme = useTheme();
	return (
		<AppBar
			position="sticky"
			sx={{
				height: "50px",
				padding: "5px 20px",
				background: theme.palette.background[900],
				borderBottom: `1px solid ${theme.palette.background[700]}`,
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "row",
			}}
		>
			<Box
				className="nav_left"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "20px",
				}}
			>
				<Link to="/">
					<Typography
						variant="h6"
						fontWeight={900}
						sx={{ color: theme.palette.primary[500], mr: 3 }}
					>
						Social Nest
					</Typography>
				</Link>

				{iconsList.left.map((i) => (
					<Tooltip title={i.label} key={i.id}>
						<IconButton
							sx={{
								color: theme.palette.text[200],
							}}
						>
							{i.icon}
						</IconButton>
					</Tooltip>
				))}

				<Box
					sx={{
						width: "350px",
						height: "30px",
						display: "flex",
						alignItems: "center",
						background: theme.palette.background[800],
						paddingY: 2,
						borderRadius: "5px",
					}}
				>
					<IconButton
						sx={{
							color: theme.palette.text[200],
						}}
					>
						<SearchRounded />
					</IconButton>

					<InputBase
						placeholder="Search people..."
						fullWidth
						sx={{
							fontSize: "14px",
							color: theme.palette.text[200],
						}}
					/>
				</Box>
			</Box>
			<Box
				className="nav_right"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "20px",
				}}
			>
				{iconsList.right.map((i) => (
					<Tooltip title={i.label} key={i.id}>
						<IconButton
							sx={{
								color: theme.palette.text[200],
							}}
						>
							{i.icon}
						</IconButton>
					</Tooltip>
				))}
				<Chip
					avatar={<Avatar alt="userimg" src="/profile.png" />}
					label="Artic Snowman"
					variant="outlined"
					sx={{
						bgcolor: theme.palette.background[700],
						color: theme.palette.text[100],
						borderColor: theme.palette.background[400],
					}}
				/>
			</Box>
		</AppBar>
	);
}
