import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText } from "@mui/material";


export default function SuggestionBox({name, avatar, listItemColor}) {
	return (
		<ListItem sx={{ color: listItemColor }}>
			<ListItemAvatar>
				<Avatar variant="rounded" src={avatar} />
			</ListItemAvatar>
			<ListItemText>{name}</ListItemText>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 1,
				}}
			>
				<Button variant="contained" color="error" size="small">
					Dismiss
				</Button>
				<Button variant="contained" color="success" size="small">
					Accept
				</Button>
			</Box>
		</ListItem>
	);
}
