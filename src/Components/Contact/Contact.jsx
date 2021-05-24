import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'

function Contact() {
  const [message, setMessage] = useState(false)

  const sendEmail= (e)=>{
     
    e.preventDefault();

    emailjs.sendForm('service_3w235be', 'template_oacfzla', e.target, 'user_8Z0P8KXbm7silKK59kj6C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 

      e.target.reset();
      setMessage(true);
  }
  
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h1>Contact.</h1>
        <form onSubmit={sendEmail}>
          <input type='text' placeholder='Your Email' name="email"/>
          <textarea placeholder='Message' name="message"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
