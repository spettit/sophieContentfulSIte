import React from "react";
import styled from "styled-components";
import { navigateTo } from "gatsby-link";

const Div = styled.div`
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  padding: 20px;
  width: 70vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  width: 100px;
  align-self: flex-end;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  width: 90%;
`;
const Textarea = styled.textarea`
  border: none;
  resize: none;
  width: 90%;
  height: 7em;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.name || !this.state.email || !this.state.message){
      alert('please enter your name, email address and a message')
    }else{
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => navigateTo("/thanks/"))
        .catch(error => alert(error));
  
      
    }
    
  };

  render() {
    return (
      <Div>
        <h1>Contact Sophie</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <Textarea name="message" value={this.state.message} onChange={this.handleChange} />
            </label>
          </p>
          <div netlify-recaptcha></div>
          <p>
            <Button type="submit">Send</Button>
          </p>
        </form>
      </Div>
    );
  }
}
