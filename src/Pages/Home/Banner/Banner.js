import React from 'react';

const Banner = () => {
    return (
        <div className="hero  bg-base-100  ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <img src="https://i.ibb.co/2sFYh8B/og-bike-parts-1.png " className=" rounded-lg shadow-2xl" />
          <div className='w-2/4'>
            <h1 className="text-5xl font-bold text-red-500">Get Original Parts With!</h1>
            <p className="py-6">We are very happy to see you here. If you need moto parts at affordable price then we can be your first choise. Get discount but get original branded products.</p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;