import React from "react";
import '../Headernav.css';
import Image from '../Images/Logo.jpg';

function Header(){
    return(
        <header className="header">

            <img src={Image} alt="Little Lemon Logo" />
            

        </header>
    );

}
export default Header;