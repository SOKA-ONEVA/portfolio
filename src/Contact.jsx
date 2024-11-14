import React from 'react';
import { Box, TextField, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

function Contact() {
  return (
    <>

      <Box sx={{ color: 'white', padding: '20px' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '50px' }}>
          CONTACT ME
        </Typography>

        
    <div className="contact">
    <form action="#" method="POST" style={{ maxWidth: '500px',margin:'auto'}}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: '15px', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            sx={{ marginBottom: '15px', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            sx={{ marginBottom: '15px', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: '15px', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={5}
            sx={{ marginBottom: '15px', backgroundColor: 'white', borderRadius: '4px' }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: '#f39c12', color: 'white', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Send Message
          </Button>
        </form>

        
</div>

     
      </Box>
    </>
  );
}

export default Contact;
