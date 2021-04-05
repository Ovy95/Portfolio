import React, { useState } from 'react'
import { Marginer } from '../components/marginer'
import { Axios, db } from '../firebase/firebaseConfig'
import './index.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-emailforthelastime.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
    console.log(formData)
  }

  return (

    <>
    <Marginer direction="vertical" margin="1em" />

     <h2>Let's make something awesome together</h2>
    

      <form onSubmit={handleSubmit}>
      <div className="underLineTitle"></div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}

        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button id="contactbutton" type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm