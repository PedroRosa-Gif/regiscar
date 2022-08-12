import React, { useState } from 'react';

// CSS Import
import '../css/SearchBar.css';

// Assets Imports
import SearchIcon from '../assets/search_icon.svg';

export default function SearcBar({ setSearchCar }) {
    const [search, setSearch] = useState('');

    async function handleSearchCar() {
        if (search !== '') {
            try {
                const req = await fetch(`http://api-test.bhut.com.br:3000/api/cars/${search}`, {
                    method: "get",
                });

                const data = await req.json();

                if (!data.msg) {
                    setSearchCar([data]);
                }
                else {
                    setSearchCar([]);
                }
            } catch (error) {
                setSearchCar([]);
            }
            
        } else {
            setSearchCar('');
        }
    }

    function handleKey(e) {
        if (e.key === 'Enter')
            document.getElementById('btn_search').click();
    }

    return (
        <div className='div_search'>
            <input type='text' onChange={(e) => setSearch(e.target.value)} className='search_field' onKeyPress={(key) => handleKey(key)} />
            <button type='button' id='btn_search' className='btn_search' onClick={() => handleSearchCar()}>
                <img src={SearchIcon} alt='Icone de uma lupa para pesquisa' />
            </button>
        </div>
    );
}
