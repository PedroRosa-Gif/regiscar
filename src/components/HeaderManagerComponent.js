import React from "react";

// Assets imports
import CarIcon from '../assets/car_icon.svg';

// CSS Import
import '../css/HeaderManagerComponent.css';

export default function HeaderManagerComponent() {
    return (
        <header className='header_component'>
            <div className='div_logo_header manager_component'>
                <img src={CarIcon} alt='Icone de um carro' className='img_logo' />
                <span>RegisCar</span>
            </div>
        </header>
    );
}