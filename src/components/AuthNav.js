import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from '@mui/material';


export default function AuthNav() {
  return (
   
    <div>
      <Button component={NavLink}
        to="/register"
        exact ="true"
        
      >
        Register
      </Button>
      <Button component={NavLink}
    
        to="/login"
        exact ="true"
      >
        Login
      </Button>
    </div>
  );
}