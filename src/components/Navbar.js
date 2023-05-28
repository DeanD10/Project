import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
//import logoImage from '../images/nav.png';

const NavBar = () => {
  return (
    // <nav style={{ backgroundColor: '#f2f2f2', padding: '0px 0px' }}>
    //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    //     <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    //       <img src={logoImage} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
    //       <span style={{ fontSize: '18px', fontWeight: 'bold' }}>E-Visa Website</span>
    //     </Link>
    //     <ul>
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
    // </ul>
    // </div>
    // </nav>
  );
};

export default NavBar;