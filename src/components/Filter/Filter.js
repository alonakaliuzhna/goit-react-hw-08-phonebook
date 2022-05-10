import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/Contacts/contacts-actions';
import {TextField} from '@mui/material';
import contactsSelectors from 'redux/Contacts/contacts-selectors';

export default function Filter () {
const dispatch=useDispatch();
const value =useSelector(contactsSelectors.filterSelector)

  return(
  
    <TextField sx={{width:"455px"}}

    label=" Find contacts by name" type="text"   
    value={value}
    onChange={event=>dispatch(changeFilter(event.currentTarget.value))} />
  
 
);}



