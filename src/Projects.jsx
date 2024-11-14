import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Projects() {
  return (
    <Box sx={{marginBottom:'40px',height:'300px',backgroundColor:'gray',padding:'10px',borderRadius:'30px'}}>
    <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',marginBottom:'50px',}}>MY PROJECTS</Typography>


    <div className="Project">

<div className="proj">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'white',paddingTop:'5px'}}>Class Management system</Typography>
<Button variant='contained' sx={{backgroundColor:'red'}}>Check It Out</Button>
</div>
<div className="proj">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'white',paddingTop:'5px'}}>E-commerce Website</Typography>
<Button variant='contained' sx={{backgroundColor:'red'}}>Check It Out</Button>
</div>
<div className="proj">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'white',paddingTop:'5px'}}>Loan Management System</Typography>
<Button variant='contained' sx={{backgroundColor:'red'}}>Check It Out</Button>
</div>

    </div>
</Box>
  )
}

export default Projects