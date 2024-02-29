import {
	Avatar,
	Box,
	Button,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";

export default function ActivityBox({listItemColor, avatar, name, activity, timestamp}) {
	return (
		<ListItem sx={{ color: listItemColor }}>
			<ListItemAvatar>
				<Avatar variant="rounded" src={avatar} />
			</ListItemAvatar>
			<ListItemText><span style={{textTransform: "capitalize", fontWeight: "bold"}}>{name}</span> {activity}</ListItemText>
			<ListItemText sx={{textAlign: "end", opacity: .6}}>{timestamp}</ListItemText>
		</ListItem>
	);
}
