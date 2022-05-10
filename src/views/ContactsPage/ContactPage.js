import React from 'react';
import ContactForm from "../../components/Form/ContactForm"
import ContactList from '../../components/ContactList/ContactList';
import Filter from "../../components/Filter/Filter"
import  { Toaster } from 'react-hot-toast';
import { useDispatch} from 'react-redux';
import {contactsOperations} from '../../redux/Contacts';
import { useEffect } from 'react';
import {Main,RegisterTitle} from "../../App.styled"
import {Box} from '@mui/material';


const ContactPage =() =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

    
    return(
        <Main>
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <RegisterTitle>PhoneBook</RegisterTitle>
      <ContactForm />
      <RegisterTitle>Contacts</RegisterTitle>
      <Filter/>
      <ContactList 
      />
       <Toaster />
       </Box>
    </Main>
    )
  }

  export default ContactPage;