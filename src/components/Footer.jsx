import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Made with love by <a style={{textDecoration: 'none'}} target="_blank" href="https://www.github.com/dshivam227">Shivam Dubey</a>
        </Typography>
      </Box>
  )
}

export default Footer