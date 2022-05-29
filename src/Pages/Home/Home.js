import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Reviews from '../Dashboard/Reviews';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './Banner/BusinessSummary';
import Featureproducts from './Banner/Featureproducts';
import ContactUs from './ContactUs';
import Products from './Products';


const Home = () => {
    const [user] = useAuthState(auth)
  
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-3xl text-center text-teal-500 text-bold mt-10'>Our Products</h2>
           <Products></Products>
           <h2 className='text-3xl text-center text-teal-500 text-bold mt-10'>Our Feature Products</h2>
           <Featureproducts></Featureproducts>
           <h2 className='text-3xl text-center text-teal-500 text-bold mt-10'>Business Summary</h2>
           <BusinessSummary></BusinessSummary>
           <h2 className='text-3xl text-center text-teal-500 text-bold mt-10'>Customer Reviews</h2>
           <Reviews></Reviews>
           <ContactUs></ContactUs>
          
        </div>
    );
};

export default Home;