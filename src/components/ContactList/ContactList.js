import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Contact from "../contact"
import {TextField,Container,CssBaseline,Box,Grid,Button,Stack} from '@mui/material';
import contactsSelectors  from '../../redux/Contacts/contacts-selectors';
import {List} from "./ContactList.styled"

  export default function ContactList () {

 
 const filtredContacts =useSelector(contactsSelectors.getVisibleContacts);



return(
    <>
         <List   >  
   { filtredContacts.map(({id,name,number }) => (
   
   <Contact  key={id} name={name} number={number} id={id}/>
   ))}
   </List>  
  
     
  
   
  
    </>
);};



  
  ContactList.propTypes={
      list:PropTypes.arrayOf(
          PropTypes.shape({
              id:PropTypes.string.isRequired,
              name:PropTypes.string.isRequired,
              number:PropTypes.string.isRequired
          })
      ),
     
  }
  