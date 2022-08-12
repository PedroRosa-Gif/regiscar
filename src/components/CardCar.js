import React from 'react';
import { useNavigate } from 'react-router';

// CSS import
import '../css/CardCar.css';

// Assets Impors
import ViewMore from '../assets/viewmore_icon.svg';

// Components Imports
import DeleteIcon from '../components/DeleteIcon';

export default function CardCar({ car, setSearchCar, ...props }) {
    const navigate = useNavigate();

    function handleEditCar() {
        navigate('/createCar', { 
            state: {
                car: car,
            }
        });
    }

    function limitString(text) {
        if (text.length > 7) {
            return text.slice(0, 7) + '...';
        }

        return text;
    }

    return (
        <div className='cardCar' key={props}>
            <div className='div_header_card'>
                <h1>ID: { limitString(car._id) }</h1>
                <DeleteIcon car={car} setSearchCar={setSearchCar} />
            </div>
            <div className='div_footer_card'>
                <p className='brand_txt'>{ car.brand }</p>
                <h1>{ car.title }</h1>
                <p className='info_txt'>Preço: { car.price }</p>
                <p className='info_txt'>Ano: { car.age }</p>
            </div>
            <div className='div_showmore_card' onClick={() => handleEditCar()} >
                <img src={ViewMore} alt='Icone de um olho' className='img_view_more' />
                <p>Ver mais...</p>
            </div>
        </div>
    );
}