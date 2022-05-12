import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import {authOperations} from '../../redux/auth';
import {RegisterTitle,Main} from "../../App.styled"
import {TextField,Container,CssBaseline,Box,Grid,Button,Alert} from '@mui/material';
import { authSelectors } from 'redux/auth';
import {  useSelector } from 'react-redux';



export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error=useSelector(authSelectors.getError)
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'name':
          return setName(value);
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
      dispatch(authOperations.register({ name, email, password }));
      setName('');
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
      <RegisterTitle>Register page</RegisterTitle>

      <Box
            component="form"
          
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={15}>
          <TextField required
          fullWidth
            helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name" type="text" name="name" value={name} onChange={handleChange} />
        </Grid>

        <Grid item xs={15}>
          <TextField required 
          helperText="Please enter your e-mail"
          id="demo-helper-text-misaligned"
          fullWidth
          label="E-mail"
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

        <Button type="submit"  variant="outlined" sx={{mt:3,mb:2}} fullWidth>Register</Button>
        {error && 
        (<Alert severity="error">This username is already taken. Please choose another</Alert>)}
        </Box>
      </Box>
    </Container>
 
    </Main>
  );
}