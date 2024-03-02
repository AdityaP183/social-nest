import { Box, Fade, Modal } from "@mui/material";
import React from "react";

export default function CommentPopUp({open, setOpen}) {
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
		>
			<Fade in={open}>
				<Box>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
					voluptatibus sequi deserunt nihil cum quia odio non in iste
					deleniti! Veniam animi deserunt dolores ad labore ut qui
					perspiciatis accusantium unde, velit aliquid mollitia beatae
					ipsum nobis sunt at eaque nesciunt! Eius necessitatibus ab,
					est quo modi ea cupiditate doloremque aperiam fugit vitae
					odit earum impedit, adipisci quidem molestiae officia vel!
					Incidunt dignissimos tempora nam eum sed delectus cum
					numquam, veniam nihil ipsam porro, animi deserunt quis nobis
					voluptas eos libero quod voluptate, quidem natus. Quia quo
					ducimus aliquam reprehenderit vel voluptatum nostrum
					voluptatem, voluptates iusto laboriosam in amet corporis.
				</Box>
			</Fade>
		</Modal>
	);
}
