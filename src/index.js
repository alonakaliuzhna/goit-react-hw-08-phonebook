import React from 'react';
import ReactDOM from 'react-dom';
import {store,persistor}from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import {GlobalStyle} from  './index.styled.js';
import App from './App';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container= document.getElementById('root')
const root= createRoot(container)


//ReactDOM.render(
 root.render(
  <React.StrictMode>
    <GlobalStyle />
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter basename='/react-homework-template'>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  //document.getElementById('root')

);

