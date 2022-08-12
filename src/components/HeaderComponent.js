import React from 'react';

// Assets imports
import CarIcon from '../assets/car_icon.svg';

// CSS Import
import '../css/HeaderComponent.css';

// Components Imports
import SandwichButton from './SandwichButton';
import SearcBar from './SearchBar';

export default function HeaderComponent({ setSearchCar }) {
  return (
    <header className='header_component'>
        <div className='div_logo_header'>
            <img src={CarIcon} alt='Icone de um carro' className='img_logo' />
            <span>RegisCar</span>
        </div>
        <div className='div_manage_header'>
          <SandwichButton />
          <SearcBar setSearchCar={setSearchCar} />
        </div>
    </header>
  );
}
