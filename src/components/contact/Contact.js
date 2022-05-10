
import { ContactItem } from "./Contact.styled";

import {Button} from '@mui/material';
import contactsOperation from "../../redux/Contacts/contacts-operation"
import { useDispatch } from 'react-redux';


function Contact({name,number,id}) {
  const dispatch=useDispatch();
  const onDeleteContact = id => dispatch(contactsOperation.deleteContact(id))
  
     return (
      <ContactItem key={id}>
      {name}: {number}
            <Button
            sx={{marginLeft:"20px"}}
            variant="outlined" 
             
              type="button"
              onClick ={() => onDeleteContact(id)} >
              Delete
            </Button>
          </ContactItem>
      

    )
}

export default Contact;  

