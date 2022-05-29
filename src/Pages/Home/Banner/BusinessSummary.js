import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid'
const BusinessSummary = () => {
    return (
      <div  className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-28 mx-12'>
        <div className="card  bg-base-100 shadow-xl">
  <div className="card-body bg-amber-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
    <h2 className="text-3xl text-center font-bold">272+</h2>
    <p className='text-white'>Clients All over the world</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
  <div className="card-body bg-lime-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-100 " viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
</svg>
  <h2 className="text-3xl text-center font-bold">552+</h2>
  <p className='text-white'> Taken feedback from client</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body bg-green-400">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-yellow-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
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