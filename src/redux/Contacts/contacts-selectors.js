

import { createSelector } from "@reduxjs/toolkit";

const getContacts= state=>state.contacts.items;

const filterSelector = state=>state.contacts.filter


const getVisibleContacts = createSelector(
  [getContacts, filterSelector],
  (contacts,filter) => {
   const normalizedFilter=filter.toLowerCase();
   return contacts.filter(({name})=>
   name.toLowerCase().includes(normalizedFilter)
   );
  }
);

const contactsSelectors = {
    getContacts,
    filterSelector,
  getVisibleContacts,
 
};

export default contactsSelectors;