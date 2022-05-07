import React from 'react';

import ContactForm from "../../components/Form/ContactForm"
import ContactList from '../../components/ContactList/ContactList';
import Filter from "../../components/Filter/Filter"
//import { nanoid } from 'nanoid'
import  { Toaster } from 'react-hot-toast';
import {Container,PhonebookTitle,ContactTitle} from "App.styled"
//import { useSelector } from 'react-redux';
//import { itemSelector } from 'redux/contacts-selectors';

const ContactPage =() =>{
    return(
        <>
      <PhonebookTitle>PhoneBook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter/>
      <ContactList />
       <Toaster />
    </>
    )
  }

  export default ContactPage;