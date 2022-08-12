import React from "react";

// Assets imports
import CloseIcon from '../assets/close_icon.svg';

// CSS Import
import '../css/WarningComponent.css';

export default function WarningComponent({ message, setMessage }) {
    return (
        <div className='warning_div'>
            <span>{message}</span>
            <img src={CloseIcon} alt='Icone de fechar' onClick={() => setMessage('')} />
        </div>
    );
}