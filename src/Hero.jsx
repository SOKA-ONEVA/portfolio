import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <>
    <Box sx={{height:'500px',marginTop:'30px'}}>
        <div className='Main'>
<div className="right">
<img src="./public/main.jpeg" width={600} height={500} alt="" />
</div>
<div className="left">

<Typography variant='h4' sx={{paddingLeft:'40px',paddingTop:'70px',fontWeight:'bold'}} paragraph>


Welcome to my portfolio! I'm <span>Oneva Soka</span>, a passionate computer science student and aspiring software developer. Explore my projects, and feel free to reach out if you're interested in collaborating or learning more about my work!
 </Typography>
 <Button variant='contained' sx={{marginLeft:'50px',backgroundColor:'orangered'}}>Read More</Button>
</div>

        </div>


    </Box>


    </>
  )
}

export default Hero