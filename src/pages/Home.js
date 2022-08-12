import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// CSS Import
import '../css/Home.css';

// Components Imports
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import ContainerComponent from '../components/ContainerComponent';
import FooterComponent from '../components/FooterComponent';

export default function Home() {
  const [searchCar, setSearchCar] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      const { msg } = location.state;
      setMessage(msg);
    }
  }, [location.state]);

  return (
    <div className='home'>
      <HeaderComponent setSearchCar={setSearchCar} />
      <div className='div_body'>
        <NavbarComponent />
        <ContainerComponent searchCar={searchCar} message={message} setMessage={setMessage}  setSearchCar={setSearchCar} />
      </div>
      <FooterComponent />
    </div>
  );
}