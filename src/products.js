import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TotalPrice from './TotalPrice';

const ProductInfo = [ // Using Array to store product information
    {
        id: 1,
        title: 'Ballet Flats',
        description: 'Made in Italy. These shoes have a velvet feel, decorated with a bow.',
        price: 29.99,
        image: 'https://i.ebayimg.com/images/g/J~QAAOSwj4JjTwrG/s-l1200.webp',
        colors: ['Navy', 'Black', 'Baby Blue']
    },
    {
        id: 2,
        title: 'Platform heels',
        description: 'Comfortable platform heels. These shoes have a plain design so that they can be worn anywhere from the office to an evening out with friends.',
        price: 49.50,
        image: 'https://www.charleskeith.co.uk/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw4909b5a8/images/hi-res/2023-L2-CK1-60920332-35-3.jpg?sw=1152&sh=1536',
        colors: ['Bubblegum', 'Hot pink', 'Coral']
    },
    {
        id: 3,
        title: 'Platform Mary Jane Shoes',
        description: 'Sturdy and classy, these shoes are made with leather with chunky platform heels. Perfect to wear with a cute skirt.' ,
        price: 17.70,
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/02/201/XXL_p0125420102.jpg',
        colors: ['Black', 'Burgundy', 'White'],
    },
    {
        id: 4,
        title: 'Cute bear Slippers',
        description: 'Cute and fluffy slippers that will keep you warm and cozy at home.',
        price: 18.50,
        image: 'https://thekawaiishoppu.com/cdn/shop/products/cute-fluffy-kawaii-slippers-open-white-bear-eu-37-38-shoes-the-kawaii-shoppu-23.jpg?v=1657941169',
        colors: ['Pastel Yellow', 'Beige', 'Light Green'],
    },
    {
        id: 5,
        title: 'Thick sole Slippers',
        description: '',
        price: 9.99,
        image: 'https://images-cdn.ubuy.co.in/634f137526cb99463a5f0a6d-pillow-slippers-for-women-and-men-thick.jpg',
        colors: ['Navy', 'Beige', 'Orange', 'Grey'], 
    },
    {
        id: 6,
        title: 'Knee High Boots',
        description: 'Flat boots made with chunky sole and inside zip to make getting them on and off easier.',
        price: 39.99,
        image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/676/741540.jpg?im=Resize,width=350',
        colors: ['Black', 'Brown', 'Olive'],
    },
    {
        id: 7,
        title: 'Bow Accent sandals',
        description: 'Cute sandals adorned with a bow and rhinestone accents.',
        price: 13.29,
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/39/043/M_p0208604339.jpg',
        colors: ['White', 'Light Yellow', 'Mint Green', 'Baby Blue'],
    },
    {
        id: 8,
        title: 'High Heel Boots',
        description: 'Faux leather stiletto heels with an inside heel. These boots can be worn for any occasion and can be paired with any clothing.',
        price: 20.00,
        image: 'https://www.simmi.com/media/catalog/product/cache/4e225cf1b0671b37be0bb4c722eec472/b/i/bishop-1_black_square_1.jpg',
        colors: ['Black', 'Cream', 'Brown'],
    },
    {
        id: 9,
        title: 'Two Tone Lace-up Sneakers',
        description: 'Sneakers with a comfortable design and deigned with breathable mesh tongues.',
        price: 26.00,
        image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/41/699/XXL_p0182969941.jpg',
        colors: ['Khaki', 'Forest Green', 'Red'],
    },
    {
        id: 10,
        title: 'Tennis Shoes',
        description: 'These shoes designed for both style and performance. These shoes are designed with breathable mesh paired with a comfortable sole for enhanced support.',
        price: 23.99,
        image: 'https://i.ebayimg.com/images/g/Ct8AAOSwhxJhz7wO/s-l1200.jpg',
        colors: ['Hot Pink', 'Purple', 'White', 'Red', 'Green', 'Black'],
    },

];

// Products component
const Products = ({ totalPrice, setTotalPrice }) => {
    // Using State to categorise colours for each product
    const [selectedColors, setSelectedColors] = useState({});

    // Function handles Buy button click
    const handleBuy = (price) => {
        setTotalPrice(totalPrice + price);
        
    };

    // Function handles colour selection from dropdown
    const handleSelectColor = (productId, color) => {
        setSelectedColors({
            ...selectedColors,
            [productId]: color
        });
    };

    

    return (
        <div className="container">
            <TotalPrice totalPrice={totalPrice} />
            <div className="row">
                {ProductInfo.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                                <DropdownButton
                                    id={`dropdown-basic-button-${product.id}`}
                                    title={selectedColors[product.id] || "Choose a colour"}
                                    onSelect={(eventKey) => handleSelectColor(product.id, eventKey)}
                                >
                                    {product.colors.map((color, index) => (
                                        <Dropdown.Item key={index} eventKey={color}>{color}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <Button variant="primary" onClick={() => handleBuy(product.price)}>Buy</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;