
import React from "react";
import img from '../Images/dish.jpg';
import '../Main.css';
function Main(){
    return(
        <main className="main-content">
            <div className="stylef">
            <div className="text-container">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon Restaurant is a 
                <br/>cozy eatery in Chicago, 
                <br/>serving fresh, locally-inspired dishes
                <br/> in a welcoming atmosphere.</p>
                </div>
                <div className="image-container">
                <img src={img} alt="dish"/>
                </div>
                </div>
        </main>
    );

}
export default Main;