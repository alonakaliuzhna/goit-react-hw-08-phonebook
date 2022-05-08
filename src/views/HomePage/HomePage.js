import React from 'react';
import {Container} from "../../App.styled"

const styles = {

  title: {
    fontFamily: 'Open Sans',
  position: "relative",
  color:" #5C2610",
  fontSize: "3em",
  fontWeight: "normal",
  lineHeight: "1",
  padding: "10px, 0",
  margin: "0",
  display: "inline-block",
},
subtitle:{
  fontFamily: 'Open Sans',
  color:" #5C2610",
  fontSize: "2em",
  fontWeight: "normal",
  lineHeight: "1",
  transform: "skew(5deg)",

}}


const HomeView = () => (
  <Container >
    <h1 style={styles.title}>
    Welcome to Phonebook,</h1>
    <h2 style={styles.subtitle}> your essential phone companion!</h2>
 
  </Container>
);

export default HomeView;