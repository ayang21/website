import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import github from '../../imgs/logo-github.svg';
import linkedin from '../../imgs/logo-linkedin.svg';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mge8ira",
        "template_evjmzkx",
        form.current,
        "Mma2EJYijkFsbpKi0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          document.getElementById('submit-button').value = '';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <div className="landing-text">
        <h1>Reach out!</h1>
        <div className="scroll"></div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
        <img className="text-img" src={linkedin} alt ="LinkedIn"/>:<a href="https://www.linkedin.com/in/adamyang25/">linkedin.com/in/adamyang25/</a>
        </div>
        <div className="contact-item">
        <img className="text-img" src={github} alt ="GitHub"/>:<a href="https://github.com/ayang21">github.com/ayang21</a>
        </div>
      </div>
      <p>
        If you have any questions or concerns, please feel free to contact us
        using the form below.
      </p>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" id="submit-button"/>
        </form>
      </StyledContactForm>


    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;