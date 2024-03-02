import { Box } from '@mui/material'
import React from 'react'
import StoriesBox from './sections/StoriesBox'
import CreatePost from './sections/CreatePost'
import Posts from '../../components/posts/Posts'

export default function Home() {
  return (
    <Box sx={{
        width: '100%',
        height: 'calc(100vh - 50px)',
        padding: '10px 70px',
        marginBottom: "30px"
    }}>
      <StoriesBox />
      <CreatePost />
      <Posts />
    </Box>
  )
}
