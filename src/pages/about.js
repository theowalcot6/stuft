// Step 1: Import React
import * as React from 'react'
import Navigation from '../components/navigation'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <div>
    <Navigation />
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default AboutPage