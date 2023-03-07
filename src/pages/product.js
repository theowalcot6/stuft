// Step 1: Import React
import * as React from 'react'
import Navigation from '../components/navigation'

// Step 2: Define your component
const ProductPage = () => {
  return (
    <div>
    <Navigation />
    
    <main>
      <h1>Product Page</h1>
      <p>Describing the features of the tool</p>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default ProductPage