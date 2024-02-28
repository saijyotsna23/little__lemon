import '../Menu.css'; // Importing the CSS for styling

const Menu = () => {
    const menuItems = {
        Appetizers: [
        { id: 1, name: 'Garlic Bread', price: '$5' },
        { id: 2, name: 'Bruschetta', price: '$6' },
        { id: 3, name: 'Stuffed Mushrooms', price: '$7' },
        { id: 4, name: 'Caprese Salad', price: '$8' },
        ],
        MainCourses: [
        { id: 5, name: 'Lemon Chicken', price: '$18' },
        { id: 6, name: 'Pasta Primavera', price: '$16' },
        { id: 7, name: 'Margherita Pizza', price: '$15' },
        { id: 8, name: 'Seafood Paella', price: '$22' },
        ],
        Desserts: [
        { id: 9, name: 'Lemon Cheesecake', price: '$8' },
        { id: 10, name: 'Tiramisu', price: '$9' },
        { id: 11, name: 'Panna Cotta', price: '$7' },
        { id: 12, name: 'Gelato', price: '$6' },
        ],
        Beverages: [
        { id: 13, name: 'Lemon Mint Iced Tea', price: '$4' },
        { id: 14, name: 'Espresso', price: '$3' },
        { id: 15, name: 'Sparkling Water', price: '$2' },
        { id: 16, name: 'Pinot Noir', price: '$9' },
        ],
    };

    return (
        <div className="menu">
        {Object.keys(menuItems).map((category) => (
            <div key={category} className="category">
            <h2>{category}</h2>
            <ul>
                {menuItems[category].map((item) => (
                <li key={item.id} className="name">
                    {item.name} - {item.price}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
    
    

}
export default Menu;