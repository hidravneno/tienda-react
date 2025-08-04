import React from 'react';
import '../styles/home.css';
import Flyer from '../components/Flyer';
import FeaturedProducts from '../components/FeaturedProducts';


const Home = () => (
  <main style={{ textAlign: 'center', padding: 0, margin: 0 }}>
    <Flyer />

    <h1>Productos Destacados</h1>
    <FeaturedProducts />
    
  </main>
);

export default Home;