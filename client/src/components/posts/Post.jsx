import {
	CommentRounded,
	FavoriteBorderRounded,
	FavoriteRounded,
	MoreVertRounded,
	ShareRounded,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Checkbox,
	IconButton,
	Stack,
	Tooltip,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CommentPopUp from "../commentPopUp/CommentPopUp";

export default function Post({ post }) {
	const theme = useTheme();

    const [isCommenting, setIsCommenting] = useState(false)

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundColor: theme.palette.background[800],
				padding: "10px",
				borderRadius: "10px",
				// boxShadow: `0 0 5px ${theme.palette.background[800]}`,
				gap: "5px",
				marginY: 3,
			}}
		>
			<Stack
				className="post_info_actions"
				direction="row"
				justifyContent="space-between"
			>
				<Stack direction="row" spacing="15px" alignItems="center">
					<Avatar src={post.profilePic} />
					<Stack
						direction="column"
						spacing="1px"
						sx={{ color: theme.palette.text[100] }}
					>
						<Typography
							variant="body1"
							fontWeight="bold"
							lineHeight={1.3}
						>
							{post.name}
						</Typography>
						<Typography
							variant="caption"
							lineHeight={1}
							sx={{ opacity: 0.6 }}
						>
							{post.createdAt}
						</Typography>
					</Stack>
				</Stack>

				<Tooltip title="Options">
					<IconButton sx={{ color: theme.palette.text[100] }}>
						<MoreVertRounded />
					</IconButton>
				</Tooltip>
			</Stack>

			<Box className="content" padding={1}>
				<Typography
					variant="body2"
					sx={{ color: theme.palette.text[100] }}
					marginBottom={2}
				>
					{post.desc}
				</Typography>
				{post.img && (
					<img
						src={post.img}
						alt=""
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "10px",
						}}
					/>
				)}
			</Box>

			<Stack direction="row" spacing="15px">
				<Stack
					direction="row"
					spacing="1px"
					alignItems="center"
					sx={{ color: theme.palette.text[100] }}
				>
					<Checkbox
						sx={{ color: theme.palette.text[100] }}
						icon={<FavoriteBorderRounded color="inherit" />}
						checkedIcon={
							<FavoriteRounded
								sx={{ color: theme.palette.text[100] }}
							/>
						}
					/>
					<Typography variant="body2">{post.likes} Likes</Typography>
				</Stack>
				<Stack
					direction="row"
					spacing="5px"
					alignItems="center"
					sx={{ color: theme.palette.text[100] }}
				>
					<IconButton sx={{ color: theme.palette.text[100] }} onClick={() => setIsCommenting(true)}>
						<CommentRounded color="inherit" />
					</IconButton>
					<Typography variant="body2">
						{post.comments} Comments
					</Typography>
				</Stack>
				<Stack
					direction="row"
					spacing="5px"
					alignItems="center"
					sx={{ color: theme.palette.text[100] }}
				>
					<IconButton sx={{ color: theme.palette.text[100] }}>
						<ShareRounded color="inherit" />
					</IconButton>
					<Typography variant="body2">Share</Typography>
				</Stack>
			</Stack>

            <CommentPopUp open={isCommenting} setOpen={setIsCommenting}/>
		</Box>
	);
}
