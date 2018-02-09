import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
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

const ContactForm = () => (
  <Form>
    <input name="name" type="text" placeholder="Your Name" style={{fontSize: '16px', border: 'none'}}/>
    <input name="email" type="email" placeholder="Your email address" style={{fontSize: '16px', border: 'none'}}/>
    <textarea placeholder="Your Message" style={{height: '200px', fontSize: '16px', border: 'none'}}/>
    <button type="submit" style={{backgroundColor: 'rebeccapurple', color: 'white', fontSize: '16px', border: 'none', marginTop: '10px'}}>Send</button>
  </Form>
)

export default ContactForm;
