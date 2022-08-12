import React from "react";

// Assets Imports
import TrashIcon from '../assets/trash_icon.svg';

// CSS Import
import '../css/DeleteIcon.css';

export default function DeleteIcon({ car, setSearchCar }) {

    async function handleDeleteCar() {
        try {
            await fetch(`http://api-test.bhut.com.br:3000/api/cars/${car._id}`, {
                method: 'DELETE',
            });
            
            setSearchCar('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='div_delete_icon' onClick={() => handleDeleteCar()}>
            <img src={TrashIcon} alt='Icone de uma lixeira' />
        </div>
    );
}