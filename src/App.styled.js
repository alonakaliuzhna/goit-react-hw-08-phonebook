import styled from 'styled-components';
import phone from "./images/phone.jpg"

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  height:100vh;
  padding: 80px;
  background-color:	#ffe6e6;
  background-image: url("${phone}");
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden
  
  `;
  export const Main=styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 80px;
  background-color:	#ffe6e6;
  height:100vh;
  
  `

export const PhonebookTitle=styled.h1`
text-transform: uppercase;`

export const ContactTitle=styled.h2`
text-transform: uppercase;`

export const RegisterTitle=styled.h1`
font-family: Open Sans;
  position: relative;
  color: #5C2610;
  font-size: 3em;
  font-weight: normal;
  line-height: 1;
  padding: 10px, 0;
  margin:10px;
  display: inline-block;
`