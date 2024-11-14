import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box sx={{height:'500px'}}>
    <Typography variant='h3' sx={{textAlign:'center',fontWeight:'bold',marginBottom:'50px'}}>ABOUT ME</Typography>


    <div className="about">

<div className="education">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'red',paddingTop:'5px'}}>Education Background</Typography>

<Typography paragraph sx={{padding:'20px'}}>

"I am currently pursuing a Bachelor’s degree in Computer Science at NIPA, where I am in my 3rd year, 1st semester. My academic journey has given me a solid foundation in core computer science concepts, including algorithms, data structures, and software engineering principles. To supplement my formal education, I have actively pursued various online programming courses, focusing on languages such as C++, Java, JavaScript, PHP, and C. 
These courses have allowed me to gain practical experience."


</Typography>
</div>
<div className="work">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'red',paddingTop:'5px'}}>Work Experience</Typography>
<Typography paragraph sx={{padding:'20px'}}>

"I gained valuable hands-on experience during my internship at Necor under Pinnacle Software Limited, where I worked on various software development projects. Following this, I worked as a Junior Software Developer for seven months, honing my skills in coding, problem-solving, 
and delivering high-quality software solutions. These roles have equipped me with a strong foundation in development practices and collaborative teamwork."

</Typography>
</div>
<div className="specialties">
<Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',color:'red',paddingTop:'5px'}}>My Specialties</Typography>


<Typography paragraph sx={{padding:'20px'}}>
"I specialize in software engineering with a focus on web and app development. Using a combination of PHP, HTML/CSS, JavaScript, and React, I create responsive, efficient, and scalable solutions 
tailored to meet your unique needs. Whether building dynamic websites or robust applications, I prioritize clean code and user-friendly experiences."

</Typography>
</div>

    </div>
</Box>
  )
}

export default About