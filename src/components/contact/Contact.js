
import { ContactButton, ContactItem } from "./Contact.styled";
import { useDeleteContactMutation } from '../../redux/contactApi';


function Contact({name,number,id}) {
  const [deleteContact,]=useDeleteContactMutation();
  
     return (
        <ContactItem key={id}>
               {name}: {number}
            <ContactButton
              type="button"
              onClick ={() => deleteContact(id)} >
              Delete
            </ContactButton>
          </ContactItem>

    )
}

export default Contact;