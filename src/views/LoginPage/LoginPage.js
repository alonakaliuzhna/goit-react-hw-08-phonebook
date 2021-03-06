import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {authOperations}  from '../../redux/auth';
import {Main,RegisterTitle} from "../../App.styled"
import {  useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {TextField,Container,CssBaseline,Box,Grid,Button,Alert} from '@mui/material';


  
  export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error=useSelector(authSelectors.getError)
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          return;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    };
  
    return (
      <Main>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <RegisterTitle>Login page</RegisterTitle>
  
      <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
          >
      <Grid container spacing={2}>
        <Grid item xs={15}>
          <TextField required
            fullWidth
            helperText="Please enter your email"
            label="Email"
            id="demo-helper-text-misaligned"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />
          </Grid>
  
          <Grid item xs={15} >
         
          <TextField required
            fullWidth
            helperText="Please enter your password"
            id="demo-helper-text-misaligned"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Grid>
  
          </Grid>
      

        <Button type="submit"  variant="outlined" sx={{mt:3,mb:2}} fullWidth>Login</Button>
        {error && 
        (<Alert severity="error">You are not logged in yet</Alert>)}
        </Box>
      </Box>
    </Container>
      </Main>
    );
  }