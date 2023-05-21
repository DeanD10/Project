import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 120}}>
              E Visa Processing
          </Typography>
          <Button color="inherit" component={Link} to ='/'>Home</Button>
          <Button color="inherit" component={Link} to ='/login'>Login</Button>
          <Button color="inherit" component={Link} to ='/apply'>Apply for Visa</Button>
          <Button color="inherit" component={Link} to ='/renew_visa'>Renew Visa</Button>
          <Button color="inherit" component={Link} to ='/contactus'>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>  
  );
};

export default NavBar;