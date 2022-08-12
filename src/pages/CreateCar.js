import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// CSS import
import '../css/CreateCar.css';

// Components imports
import FooterComponent from '../components/FooterComponent';
import HeaderManagerComponent from '../components/HeaderManagerComponent';

export default function CreateCar() {
  const location = useLocation();
  const navigator = useNavigate();
  const { car } = location.state;
  const [item, setItem] = useState(car || {
    title: '',
    brand: '',
    price: '',
    age: 0,
  });

  async function handleEditCar() {
    try {
      const req = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${car._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: item.title,
          brand: item.brand,
          price: item.price,
          age: Number(item.age),
        }),
      });

      const data = await req.json();
      navigator('/', {
        state: {
          msg: `Carro com ID: ${data._id} editado com sucesso!`,
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddCar() {
    try {
      const req = await fetch(`http://api-test.bhut.com.br:3000/api/cars`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: item.title,
          brand: item.brand,
          price: item.price,
          age: Number(item.age),
        }),
      });

      const data = await req.json();
      navigator('/', {
        state: {
          msg: `Carro com ID: ${data._id} criado com sucesso!`,
        }
      });
    } catch (error) {
      console.log(error);
    }
  }


  function handleManagerCar() {
    const fields = Object.keys(item).reverse();
    let isEmpty = false;

    fields.forEach((field) => {
      if (field !== '__v' && (item[field] === '' || item[field] === 0)) {
        document.getElementById(field).focus();
        isEmpty = true;
      }
    });

    if (isEmpty) return;

    if (car)
      handleEditCar();
    else
      handleAddCar();

  }

  return (
    <div className='create_car'>
      <HeaderManagerComponent />
      <div className='container'>
        <div className='body_container'>
          <form className='form_car'>
            <span>{car ? 'Editar' : 'Cadastrar'} Carro</span>
            <div className='div_field_form'>
              <label htmlFor='title'>Título:</label> 
              <input type='text' id='title' value={item.title} onChange={(e) => setItem({ ...item, title: e.target.value})} />
            </div>
            <div className='div_field_form'>
              <label htmlFor='brand'>Marca:</label> 
              <input type='text' id='brand' value={item.brand} onChange={(e) => setItem({ ...item, brand: e.target.value})} />
            </div>
            <div className='div_field_form'>
              <label htmlFor='price'>Preço:</label> 
              <input type='text' id='price' value={item.price} onChange={(e) => setItem({ ...item, price: e.target.value})} />
            </div>
            <div className='div_field_form'>
              <label htmlFor='age'>Ano:</label> 
              <input type='number' id='age' value={item.age} onChange={(e) => setItem({ ...item, age: e.target.value})} />
            </div>
            <div className='div_btn_form'>
              <Link to='/' className='btn_back'>
                Voltar
              </Link>
              <button type='button' className='btn_submit' onClick={() => handleManagerCar()}>{car ? 'Editar' : 'Cadastrar'} Carro</button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}