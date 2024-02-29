import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

export default function ActiveUserBox({listItemColor, avatar, name}) {
  return (
    <ListItem sx={{ color: listItemColor }}>
			<ListItemAvatar>
                <Badge badgeContent=" " color='success' variant='dot'>
				    <Avatar src={avatar} />
                </Badge>
			</ListItemAvatar>
			<ListItemText sx={{textTransform: "capitalize", fontWeight: "bold"}}>{name}</ListItemText>
		</ListItem>
  )
}
