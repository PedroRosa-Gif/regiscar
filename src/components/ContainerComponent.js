import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// CSS Import
import '../css/ContainerComponent.css';

// Components Imports
import CardCar from './CardCar';
import Loading from "./Loading";
import WarningComponent from "./WarningComponent";

export default function ContainerComponent({ searchCar, message, setMessage, setSearchCar }) {
  const [cars, setCars] = useState();
  
  async function handleCars() {
    try {
      const req = await fetch('http://api-test.bhut.com.br:3000/api/cars', {
        method: 'get',
      });
      
      const data = await req.json();

      setCars(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (searchCar === '')
      handleCars();
    else
      setCars(searchCar);

  }, [searchCar]);

  if (!cars) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <div className='body_container'>
        { message ? <WarningComponent message={message} setMessage={setMessage} /> : null }
        <div className='div_grid_cards'>
          {
            cars.length ? cars.map((car, index) => {
              return <CardCar car={car} setSearchCar={setSearchCar} key={index} />;
            }) : <p>Nenhum carro encontrado!</p>
          }
        </div>
      </div>
    </div>
  );
}