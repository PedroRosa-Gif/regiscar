import React, { useState } from 'react';

// CSS Import
import '../css/SearchBar.css';

// Assets Imports
import SearchIcon from '../assets/search_icon.svg';

export default function SearcBar({ setSearchCar }) {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    async function handleSearchCar() {
        if (window.innerWidth > 480 || isOpen) {
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
        } else {
            handleSearchBar(true);
        }
        
    }

    function handleSearchBar(status) {
        if (status) {
            document.getElementById('search_field').style = 'display: block;';
            document.getElementById('div_search').style = 'border: 2px solid var(--gray-color); width: 80%; justify-content: space-between;';
            document.getElementById('btn_search').style = 'width: 20%;';
            setIsOpen(true);
        }
    }

    function handleKey(e) {
        if (e.key === 'Enter')
            document.getElementById('btn_search').click();
    }

    return (
        <div className='div_search' id='div_search'>
            <input type='text' onChange={(e) => setSearch(e.target.value)} className='search_field' onKeyPress={(key) => handleKey(key)} id='search_field' />
            <button type='button' id='btn_search' className='btn_search' onClick={() => handleSearchCar()}>
                <img src={SearchIcon} alt='Icone de uma lupa para pesquisa' id='search_icon' />
            </button>
        </div>
    );
}
