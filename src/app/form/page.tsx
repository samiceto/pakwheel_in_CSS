import React from 'react'
import Link from 'next/link'
import '../style.css';  

const Page = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Enter Your Details</h1>
      
      <input 
        type="text" 
        placeholder="Enter your Name" 
        className="input-field" 
      />
      
      <input 
        type="email" 
        placeholder="Enter your Email" 
        className="input-field" 
      />
      
      <input 
        type="text" 
        placeholder="Enter your Card number" 
        className="input-field" 
      />
      
      <input 
        type="text" 
        placeholder="Enter your Address" 
        className="input-field" 
      />
      
      <button className="submit-button">
        <Link href="/thanks">Place your Order</Link>
      </button>
    </div>
  )
}

export default Page;
