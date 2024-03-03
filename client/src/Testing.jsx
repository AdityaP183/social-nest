import { Box, useTheme } from '@mui/material'
import React from 'react'

export default function Testing() {
    const theme = useTheme()
  return (
    <div style={{width: "100%", height: "100vh", background: "", display: "grid", gridTemplateColumns: "auto auto auto auto auto"}}>
      <div style={{width: "100%", display: "grid", gridTemplateColumns: "auto auto"}}>
        <h2 color='white' style={{marginBottom: "10px"}}>Text</h2>
        <Box className="box" sx={{background: theme.palette.text[50]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[100]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[200]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[300]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[400]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[500]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[600]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[700]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[800]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[900]}}></Box>
        <Box className="box" sx={{background: theme.palette.text[950]}}></Box>
      </div>
      <div style={{width: "100%", display: "grid", gridTemplateColumns: "auto auto"}}>
        <h2 color='white' style={{marginBottom: "10px"}}>Background</h2>
        <Box className="box" sx={{background: theme.palette.background[50]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[100]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[200]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[300]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[400]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[500]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[600]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[700]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[800]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[900]}}></Box>
        <Box className="box" sx={{background: theme.palette.background[950]}}></Box>
      </div>
      <div style={{width: "100%", display: "grid", gridTemplateColumns: "auto auto"}}>
        <h2 color='white' style={{marginBottom: "10px"}}>Primary</h2>
        <Box className="box" sx={{background: theme.palette.primary[50]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[100]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[200]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[300]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[400]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[500]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[600]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[700]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[800]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[900]}}></Box>
        <Box className="box" sx={{background: theme.palette.primary[950]}}></Box>
      </div>
      <div style={{width: "100%", display: "grid", gridTemplateColumns: "auto auto"}}>
        <h2 color='white' style={{marginBottom: "10px"}}>Secondary</h2>
        <Box className="box" sx={{background: theme.palette.secondary[50]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[100]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[200]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[300]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[400]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary.main}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[600]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[700]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[800]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[900]}}></Box>
        <Box className="box" sx={{background: theme.palette.secondary[950]}}></Box>
      </div>
      <div style={{width: "100%", display: "grid", gridTemplateColumns: "auto auto"}}>
        <h2 color='white' style={{marginBottom: "10px"}}>Accent</h2>
        <Box className="box" sx={{background: theme.palette.accent[50]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[100]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[200]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[300]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[400]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[500]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[600]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[700]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[800]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[900]}}></Box>
        <Box className="box" sx={{background: theme.palette.accent[950]}}></Box>
      </div>
    </div>
  )
}
