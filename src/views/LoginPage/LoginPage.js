import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations  from '../../redux/auth/auth-operations';
import {Main,RegisterTitle} from "../../App.styled"
import {TextField,Container,CssBaseline,Box,Grid,Button,} from '@mui/material';


  
  export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
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
            helperText="Please enter your name"
            label="Name"
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
        </Box>
      </Box>
    </Container>
      </Main>
    );
  }