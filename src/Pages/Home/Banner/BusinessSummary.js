import React from 'react';

const BusinessSummary = () => {
    return (
      <div  className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-28 mx-12'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body bg-amber-500">
    <h2 className="text-3xl text-center font-bold">272+</h2>
    <p className='text-white'>Clients All over the world</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
  <div className="card-body bg-lime-500">
  <h2 className="text-3xl text-center font-bold">552+</h2>
  <p className='text-white'> Taken feedback from client</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body bg-green-400">
  <h2 className="text-3xl text-center font-bold">872+</h2>
  <p className='text-white'>Variety of collections our</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body bg-teal-400">
  <h2 className="text-3xl text-center font-bold">372+</h2>
  <p className='text-white'>Supply  over the world</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>

      </div>


      
    );
};

export default BusinessSummary;