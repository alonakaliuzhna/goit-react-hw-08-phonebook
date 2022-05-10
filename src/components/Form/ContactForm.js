import React, {  useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { FormContainer,Label,FormButton,FormInput } from './Form.styled';
//import { useCreateContactMutation } from '../../redux/contactApi';
import  toast from 'react-hot-toast';
import {TextField,Container,CssBaseline,Box,Grid,Button,} from '@mui/material';

import { useDispatch,useSelector } from 'react-redux';
import  contactsSelectors  from '../../redux/Contacts/contacts-selectors';
import { authOperations } from 'redux/auth';
import {contactsOperations} from '../../redux/Contacts';


export default function Form (){
  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const dispatch = useDispatch();
  const contacts=useSelector(contactsSelectors.getContacts)
 

 const nameInputId = nanoid();
 const  numberInputId = nanoid();

 const handleChange = event => {
  const { name, value } = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
     return;
  };
}

const reset=()=> {
setName('');
setNumber('');
};

const handleSubmit = event => {
  event.preventDefault();
  if(contacts.find(contact=>contact.name===name)){
    toast.error(`${name} is already in contact`)
  }
  else{
    dispatch(contactsOperations.addContact({name,number}));
    toast.success(`${name}  successfully created!`)
  }
  // ? toast.error(`${name} is already in contact`)      
  //:dispatch(addContacts({id,name,number}));
 
  reset();
  console.log(name, number);

};

return (
  <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
          >
      <Grid container spacing={2}>
        <Grid item xs={15}>
          <TextField 
            fullWidth
  type="text"
  name="name"
  label="Name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  value={name} 
  onChange={handleChange}
  id={nameInputId}
/>
</Grid>
    


        <Grid item xs={15}>
          <TextField 
            fullWidth
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  label="Number"
  value={number} 
  onChange={handleChange}
  id={numberInputId}
/>

</Grid>
</Grid>
  
    
    <Button type="submit"  variant="outlined" sx={{mt:3,mb:2}} fullWidth>Add contact</Button>
    
  </Box>

  );

 }