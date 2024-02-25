import React from "react";
import '../Footer.css';
import mImage from '../Images/Logo-.jpg';
function Footer(){
    return(
        <footer>
            <div className="footer-content">
        <div className="footer-logo">
        <img src={mImage} alt="Little Lemon Logo" />
        </div>
        <div className="contact-info">
        <h4>Contact Us</h4>
        <p>Address: 123 Main Street, Cityville</p>
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
        </div>
    </div>
        </footer>
    );

}
export default Footer;