import { Box } from '@mui/material'
import React from 'react'
import StoriesBox from './sections/StoriesBox'

export default function Home() {
  return (
    <Box sx={{
        width: '100%',
        height: 'calc(100vh - 50px)',
        padding: '10px 50px',
    }}>
      <StoriesBox />
    </Box>
  )
}
