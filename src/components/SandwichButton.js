import React, { useState } from 'react';

// CSS Import
import '../css/SandwichButton.css';

export default function SandwichButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavBar() {
    if (!isOpen) {
      document.getElementById('navbar').style = 'margin-left: 0';
    } else {
      if (window.innerWidth > 2060) {
        document.getElementById('navbar').style = 'margin-left: -600px';
      } else if (window.innerWidth > 1700) {
        document.getElementById('navbar').style = 'margin-left: -400px';
      } else {
        document.getElementById('navbar').style = 'margin-left: -300px';
      }
    }

    setIsOpen(isOpen === false);
  }

  return (
    <div className='sandwich_button' onClick={() => handleNavBar()}>
        <div className="div_row_button" />
        <div className="div_row_button" />
        <div className="div_row_button" />
    </div>
  );
}
