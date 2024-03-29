import {
	Avatar,
	Badge,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ActiveUserBox({ listItemColor, avatar, name }) {
	const StyledBadge = styled(Badge)(({ theme }) => ({
		"& .MuiBadge-badge": {
			backgroundColor: "#44b700",
			color: "#44b700",
			boxShadow: `0 0 0 2px ${theme.palette.background[700]}`,
			"&::after": {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				borderRadius: "50%",
				animation: "ripple 1.2s infinite ease-in-out",
				border: "1px solid currentColor",
				content: '""',
			},
		},
		"@keyframes ripple": {
			"0%": {
				transform: "scale(.8)",
				opacity: 1,
			},
			"100%": {
				transform: "scale(2.4)",
				opacity: 0,
			},
		},
	}));

	return (
		<ListItem sx={{ color: listItemColor }}>
			<ListItemAvatar>
				<StyledBadge
					overlap="circular"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					variant="dot"
				>
					<Avatar src={avatar} />
				</StyledBadge>
			</ListItemAvatar>
			<ListItemText
				sx={{
					textTransform: "capitalize",
				}}
			>
				{name}
			</ListItemText>
		</ListItem>
	);
}
