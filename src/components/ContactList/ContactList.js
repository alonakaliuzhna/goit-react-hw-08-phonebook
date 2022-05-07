import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../redux/contacts-selectors';
import Contact from "../contact"
import { useFetchContactsQuery } from '../../redux/contactApi';
import {List} from "./ContactList.styled"


  export default function ContactList () {
    const {data:contacts,isFetching}=useFetchContactsQuery();
    const filter=useSelector(filterSelector);
 
    

  const getFiltredContacts=()=>{
     return filter
     ?contacts.filter(({name})=>
     name.toLowerCase().includes(filter.toLowerCase())
     )
     :contacts;
    }

  const filtredContacts=getFiltredContacts()

return(
    <>
  
   {!isFetching && filtredContacts.map(({id,name,number }) => (
     <List key={id}>
   <Contact name={name} number={number} id={id}/>
   </List>
     ))}
    
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
  