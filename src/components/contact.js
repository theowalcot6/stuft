// Step 1: Import React
import * as React from 'react'
import {
    form,
    label
} from './contact.module.css'

// Step 2: Define your component
const ContactForm = () => {
  return (
       <form name = 'contact' method="post" action="#" class={form} data-netlify='true' data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <label class={label}>
            Name*
            <input type="text" name='name' class='name' required='true' placeholder='Your Name'/>
        </label>
        <label class={label} name='hellp'>
            Email*
            <input type="email" name="email" class="email" required='true' placeholder='example@gmail.com'/>
        </label>
        <button type="submit">Sign up</button>
        </form> 
  )
}

// Step 3: Export your component
export default ContactForm
