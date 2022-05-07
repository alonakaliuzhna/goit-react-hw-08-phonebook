import React, {  useState } from 'react';
import { nanoid } from 'nanoid'
import { FormContainer,Label,FormButton,FormInput } from './Form.styled';
//import { useCreateContactMutation } from '../../redux/contactApi';
import  toast from 'react-hot-toast';
import { useFetchContactsQuery,useCreateContactMutation } from '../../redux/contactApi';



export default function Form (){
  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const{data:contacts,}=useFetchContactsQuery();
  const[createContact]=useCreateContactMutation();
  

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
    createContact({name,number});
    toast.success(`${name}  successfully created!`)
  }
  // ? toast.error(`${name} is already in contact`)      
  //:dispatch(addContacts({id,name,number}));
 
  reset();
  console.log(name, number);

};

return (
  <FormContainer onSubmit={handleSubmit}>
    <Label htmlFor={name}>Name </Label>
    <FormInput
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name} 
  onChange={handleChange}
  id={nameInputId}
/>
    

    <Label htmlFor={number}> Number </Label>
    <FormInput
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number} 
  onChange={handleChange}
  id={numberInputId}
/>
  
    <FormButton type='submit'>Add contact</FormButton>
  </FormContainer>

  );

 }