import React from 'react';
import styled from 'styled-components';
import { navigateTo } from "gatsby-link";

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

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <Div>
        <h1>Contact</h1>
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
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
            <Input type="text" name="name" onChange={this.handleChange}/>
            </label>
          </p>
          {/* <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
          </p> */}
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <Button type="submit">Send</Button>
          </p>
        </form>
      </Div>
    );
  }
}