import React from 'react';
import '../About.css';
import s from '../Images/ab.jpg';

const About = () => {
return (
    <div className="about-container">
    <h1>Welcome to Little Lemon Restaurant</h1>
    <div className="flexbox">
    <p>
        Nestled in the heart of the city, Little Lemon offers an unforgettable dining experience, combining exquisite culinary creations with a warm, inviting atmosphere. Our mission is to bring together the finest ingredients and flavors from around the world to create dishes that not only satisfy the palate but also inspire the soul.
    
   
    
    <br/>
    <br/>
        Since our opening in 2010, we've been dedicated to providing our guests with a unique dining experience, showcasing a menu that changes seasonally to reflect the freshest locally sourced ingredients. Our passionate team, led by award-winning chefs, crafts each dish with love and precision, ensuring that every visit to Little Lemon is memorable.
    </p>
    <img src={s} alt="img"/>
    </div>
    <p>
        At Little Lemon, we believe in the power of food to bring people together. Whether you're celebrating a special occasion or simply treating yourself to a delightful meal, we're here to make your experience exceptional. Join us and discover the magic of Little Lemon.
    </p>
    </div>
  );
};

export default About;
