import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FacebookOutlined, Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color='yellow' gutterBottom>
              Oneva Soka
            </Typography>
            <Typography variant="body2" gutterBottom>
            "I specialize in software engineering with a focus on web and app development. Using a combination of PHP, HTML/CSS, JavaScript, and React, I create responsive, efficient, and scalable solutions tailored 
            to meet your unique needs. Whether building dynamic websites or robust applications, I prioritize clean code and user-friendly experiences."
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color='yellow' gutterBottom>
              Social Media
            </Typography>
            <List sx={{ padding: 0 }}>
              <ListItem>
                <ListItemIcon>
                  <FacebookOutlined sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://facebook.com" color="inherit" underline="hover">
                    Facebook
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Instagram sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://instagram.com" color="inherit" underline="hover">
                    Instagram
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Twitter sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://twitter.com" color="inherit" underline="hover">
                    Twitter
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedIn sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://linkedin.com" color="inherit" underline="hover">
                    LinkedIn
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <YouTube sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://youtube.com" color="inherit" underline="hover">
                    YouTube
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color='yellow' gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:onevasoka09@gmail.com" color="inherit" underline="hover">onevasoka09@gmail.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+260973514161" color="inherit" underline="hover">+260-0973514161</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Oneva Soka. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
