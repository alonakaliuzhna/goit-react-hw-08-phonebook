
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';
import contactsReducer from './Contacts/contacts-reducer';

const middleware=[...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
];


const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer:{
  auth: persistReducer(authConfig, authSlice),
  contacts:contactsReducer,

},
  middleware,
  devTools:process.env.NODE_ENV ==="development",

});
setupListeners(store.dispatch);
export const persistor = persistStore(store);



