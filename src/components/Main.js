
import React from "react";
import Button from '../Button';
import img from '../Images/dish.jpg';
import imag from '../Images/f1.jpg';
import ima from '../Images/f2.jpg';
import imga from '../Images/f3.jpg';
import '../Main.css';
import Card from './Card';
function Main(){

    const handleClick = () => {
        console.log('Button clicked!');
    };
    const handleClick1 = () => {
        console.log('Button clicked!');
    };
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
                <Button onClick={handleClick}>Reserve a Table</Button>
                </div>
                <div className="image-container">
                <img src={img} alt="dish"/>
                </div>
                </div>
                <div className="special-container">
                    <h1>This weeks specials!</h1>
                    <Button onClick={handleClick1}>Online Order</Button>
                </div>
                <div>
    <div className="card-container">
    <Card
        imageUrl={imga}
        name="Bruchetta"
        price="19.99"
        description="At Little Lemon, our Bruschetta is a burst of Mediterranean flavors in every bite. Enjoy crisp and toasted baguette slices topped with ripe tomatoes, fresh basil, garlic, and extra virgin olive oil. It's a simple yet satisfying appetizer, perfect for starting your meal on a refreshing note."
    />
    <Card
        imageUrl={ima}
        name="Greek Salad"
        price="20.99"
        description="Little Lemon Restaurant's Greek salad: A vibrant mix of tomatoes, cucumbers, onions, peppers, olives, and feta cheese, tossed in a zesty olive oil and lemon dressing. Enjoy the taste of Greece in every bite! "
    />
    <Card
        imageUrl={imag}
        name="Spaghetti"
        price="21.99"
        description="At Little Lemon, our Spaghetti is a classic Italian dish that promises comfort and flavor. Made with al dente spaghetti pasta tossed in a savory marinara sauce, infused with garlic, basil, and ripe tomatoes, each forkful is a taste of Italy. Whether enjoyed on its own or paired with your favorite protein, our Spaghetti is sure to delight your taste buds with its simplicity and deliciousness."
    />
    </div>
        </div>
        </main>
    );

}
export default Main;