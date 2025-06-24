import Image from 'next/image';
import './PartnersCard.css';

export default function PartnersCard({ logo, name, description }) {
    return (
        <div className="Partners_card_component_class">
            <Image 
                src={logo} 
                alt={name} 
                className="partner-logo"
                width={100}
                height={100}
            />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
} 