import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './style.css'; // Optional: For custom styles

const Card = ({ image, text, link }) => {
    return (
        <div className="card">
            {/* Use Link for internal routing */}
            <Link to={link}>
                <img src={image} alt={text} className="card-image" />
                <p className="card-text">{text}</p>
            </Link>
        </div>
    );
}

const CardLayout = () => {
    const cardsData = [
        { image: 'https://via.placeholder.com/250', text: 'Searching and Sorting', link: '/shellsort' }, // Link to shellsort page
        { image: 'https://via.placeholder.com/250', text: 'Linked List', link: '/linkedlist' },
        { image: 'https://via.placeholder.com/250', text: 'Hashing', link: '/hashing' },
        { image: 'https://via.placeholder.com/250', text: 'Stack and Queue', link: '/stackqueue' },
        { image: 'https://via.placeholder.com/250', text: 'Trees', link: '/trees' },
        { image: 'https://via.placeholder.com/250', text: 'Graphs', link: '/graphs' },
    ];

    return (
        <div className="card-container">
            {cardsData.map((card, index) => (
                <Card key={index} image={card.image} text={card.text} link={card.link} />
            ))}
        </div>
    );
}

export default CardLayout;
