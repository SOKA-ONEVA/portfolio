import { Box, Typography } from '@mui/material'
import React from 'react'

function Languages() {
  return (
    <>

        <Box sx={{height:'400px'}}>
        
        <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',marginBottom:'50px'}}>Proficient Languages</Typography>
        <div className="lang">

            <img src="./public/OIP.jpeg" alt="" />
            <img src="./public/OIF.jpeg" alt="" />
            <img src="./public/php.jpeg" alt="" />
            <img src="./public/react.png" alt="" />
            <img src="./public/html.jpeg" alt="" />
            <img src="./public/html.jpeg" alt="" />
        </div>

        </Box>
        </>
  )
}

export default Languages