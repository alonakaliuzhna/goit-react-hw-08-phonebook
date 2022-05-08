import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import {RegisterTitle,Main} from "../../App.styled"
import {TextField,Container,CssBaseline,Box,Grid} from '@mui/material';
const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <Container maxWidth="sm" >
      <CssBaseline />
      <Box
      sx={{
        display: "flex",
        alignItems:"center",
        flexDirection:"column",
        marginTop:10,
        
    
      }}>
      <RegisterTitle>Register page</RegisterTitle>

      <Box  compopent="form"mt={2} onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}sx={{display: 'flex',flexDirection: 'column',width: "500px"}} >
      <Grid item xs={15}   >
          <TextField required  helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name" type="text" name="name" value={name} onChange={handleChange} />
        </Grid>

        <Grid item xs={15}>
          <TextField required 
          helperText="Please enter your e-mail"
          id="demo-helper-text-misaligned"
          label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={15}>
         
          <TextField required
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

        <button type="submit">Зарегистрироваться</button>
        </Box>
      </Box>
    </Container>
    </Main>
  );
}