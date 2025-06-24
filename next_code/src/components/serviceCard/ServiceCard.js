import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, link }) {
    return (
        <div className="Service_card_component_class animate-on-scroll">
            <div className="service-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <Link href={link} className="btn btn-secondary">En savoir plus</Link>
        </div>
    );
}
