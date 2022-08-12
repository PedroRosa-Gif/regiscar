import React from "react";
import { useNavigate } from "react-router";


// CSS import
import '../css/NavbarComponent.css';

// Assets imports
import AddIcon from '../assets/add_icon.svg';

export default function NavbarComponent() {
    const navigate = useNavigate();

    function handleAddCar() {
        navigate('/createCar', {
            state: {
                car: undefined,
            }
        })
    }

    return (
        <div className='navbar' id='navbar'>
            <p>Funcionalidades:</p>
            <ul>
                <li className='li_navbar' onClick={() => handleAddCar()}>
                    <img src={AddIcon} alt='Icone de adição' />
                    <span className='txt_list_navbar'>Cadastrar Carro</span>
                </li>
            </ul>
        </div>
    );
}