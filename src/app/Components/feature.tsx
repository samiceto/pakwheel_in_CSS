import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import '../style.css';

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="flex justify-between">
        <p className="arrow-button arrow-button-left">❰</p>
        <p className="arrow-button arrow-button-right">❱</p>
      </div>
      <div className="header">
        <h1>Featured New Cars</h1>
        <div><Link href="/" className="view-all">View All New Cars</Link></div>
      </div>
      <div className="tabs">
        <div>
          <h1 className="tab-item">Popular</h1>
        </div>
        <h1 className="tab-item">Upcoming</h1>
        <h1 className="tab-item">Newly Launched</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <Image src="/1.jpg" alt="Toyota Corolla" width={500} height={500} />
          <p className="card-title"><Link href="/car1">Toyota Corolla</Link></p>
          <p className="card-price">PKR 59.7 - 75.5 lacs</p>
          <p className="card-rating"><span>★★★☆☆</span> <span className="reviews">622 Reviews</span></p>
        </div>
        <div className="card">
          <Image src="/2.png" alt="Suzuki Alto" width={500} height={500} />
          <p className="card-title"><Link href="/car2">Suzuki Alto</Link></p>
          <p className="card-price">PKR 23.3 - 30.5 lacs</p>
          <p className="card-rating"><span>★★★☆☆</span> <span className="reviews">622 Reviews</span></p>
        </div>
        <div className="card">
          <Image src="/3.jpg" alt="Honda City" width={500} height={500} />
          <p className="card-title"><Link href="/car3">Honda City</Link></p>
          <p className="card-price">PKR 46.5 - 58.5 lacs</p>
          <p className="card-rating"><span>★★★☆☆</span> <span className="reviews">622 Reviews</span></p>
        </div>
        <div className="card">
          <Image src="/4.jpg" alt="Honda Civic" width={500} height={500} />
          <p className="card-title"><Link href="/car4">Honda Civic</Link></p>
          <p className="card-price">PKR 86.6 - 99.0 lacs</p>
          <p className="card-rating"><span>★★★☆☆</span> <span className="reviews">622 Reviews</span></p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
