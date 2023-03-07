// Step 1: Import React
import * as React from 'react'
import Navigation from '../components/navigation'

// Step 2: Define your component
const LoginPage = () => {
  return (
    <div>
    <Navigation />
    
    <main>
      <h1>Log in Page</h1>
      <p>Log in to the web application</p>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default LoginPage