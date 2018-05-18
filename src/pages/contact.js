import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 20px;
  width: 70vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Button = styled.button`
background-color: rebeccapurple;
color: white;
font-size: 16px;
border: none;
width: 200px;
align-self: flex-end;
`

const Input = styled.input`
font-size: 16px;
border: none;
`

const ContactForm = () => (
  <form 
    name="contact"
    // method="POST"
    netlify
    // data-netlify="true"
    // data-netlify-honeypot='bot-field'
    >
    <Div>
    <Input name="name" type="text" placeholder="Your Name" />
      <Input name="email" type="email" placeholder="Your email address" />
      <textarea placeholder="Your Message" style={{height: '200px', fontSize: '16px', border: 'none', resize: 'none'}}/>
      <Button type="submit">Send</Button>
    </Div>
      
  </form>
)

export default ContactForm;
