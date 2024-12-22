import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../style.css'; 

const Page = () => {
  return (
    <div className="page-container">
      <p className="page-title">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
      </p>
      <Image 
        src="/35.jpg" 
        alt="Toyota Corolla 2024" 
        width={500} 
        height={500} 
        className="page-image"
      />
      <div className="button-container">
        <button className="button button-primary">Make Payment</button>
        <button className="button button-secondary">Make Payment</button>
        <button className="button button-tertiary">Make Payment</button>
        <button className="button button-quaternary">Make Payment</button>
      </div>
      <p className="page-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos dicta
        cupiditate dolor ipsum excepturi minus velit amet magni! Quas, consequuntur ad? Amet 
        nam unde rem quasi explicabo culpa et?
      </p>
      <p className="font-semibold text-lg">Vehicle Description</p>
      <div className="vehicle-details">
        <p className="vehicle-detail"><span>Number of Doors:</span> 4</p>
        <p className="vehicle-detail"><span>Engine:</span> 1800 cc</p>
        <p className="vehicle-detail"><span>Condition:</span> 8.5 / 10</p>
        <p className="vehicle-detail"><span>Driven:</span> 1500 KM</p>
        <p className="vehicle-detail"><span>Suspension Type:</span> Soft Suspension</p>
        <p className="vehicle-detail"><span>Avg:</span> 13 KM per liter</p>
        <p className="vehicle-detail"><span>Transmission:</span> Automatic</p>
        <p className="vehicle-detail"><span>Fuel Type:</span> High Octane</p>
      </div>
      <p className="page-price">PKR 50,000</p>
      <button className="payment-button">
        <Link href="/form">Make Payment</Link>
      </button>
    </div>
  );
}

export default Page;
