import React, { useState } from 'react'
import styles from "./Contact.module.css"
import { MdMessage } from 'react-icons/md';
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Button from '../Button/Button'

function ContactForm() {
  const [name, setname] = useState ('Sahil') 
  const [email, setEmail] = useState("Sahilsatardekar999@gmail.com");
  const [text, setText] = useState(" Hii jevlis ka");


  const onsubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    setname(event.target[0].value)
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_Btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<IoCall  fontSize="24px"/>}/>
            </div>
            <Button
             isOutline={true} 
            text="VIA EMAIL FORM" icon={<IoIosMail fontSize="24px" />}/>
            <form onSubmit={onsubmit} className={styles.form_content}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text"  rows="6"></textarea>
              </div>
              <div style={{
              display: "flex",
              justifyContent: 'end'
            }}>
            <Button text="submit" />
            </div>
            <div>
              {name + " " + email + " " + text}
            </div>
            </form>
            
        </div>
        <div className={styles.contact_image}>
          <img src="/images/hii.svg" alt="Hii" />
        </div>
    </section>
  )
}

export default ContactForm
