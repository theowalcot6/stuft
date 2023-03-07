// Step 1: Import React
import * as React from 'react'
import Navigation from '../components/navigation'
import ContactForm from '../components/contact'

import {
  left,
  right,
  main,
  box,
  final
} from './getstarted.module.css'

// Step 2: Define your component
const GetStartedPage = () => {
  return (
    <div>
    <Navigation />
    
    <main class={main}>
      <div class={left}>
        <h4>SIGN UP</h4>
        <h3>Receive updates on our 2023 launch in time for the summer exams.</h3>
        <ContactForm />
      </div>
      <div class={right}>
        <div class={box}>
          <h3>Guaranteed A* grades, or your money back</h3>
          <hr></hr>
          <div><span>&#10003;</span><p>Practice on the most extensive question database</p></div>
          <div><span>&#10003;</span><p>Create mock exams to simulate the real thing</p></div>
          <div><span>&#10003;</span><p>Target your weaknesses on our data-led platform</p></div>
          <div class={final}><span>&#10003;</span><p>Build a robust AI-timeplan across multiple subjects and exams</p></div>
        </div>

      </div>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default GetStartedPage