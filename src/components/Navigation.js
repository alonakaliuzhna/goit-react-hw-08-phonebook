import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import {Button} from '@mui/material';


const Navigation = () => {
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)

  return(
  <nav>
    <Button  variant="outlined" component={NavLink} to="/"  exact="true"  >
      Home
    </Button>

{ isLoggedIn && (
   <Button component={NavLink}
      to="/contacts"
      exact="true"
    >
      Contacts
    </Button>
)}
  </nav>
)};

export default Navigation;