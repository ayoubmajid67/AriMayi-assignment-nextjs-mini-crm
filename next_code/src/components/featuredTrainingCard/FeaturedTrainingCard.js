import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import './FeaturedTrainingCard.css';

export default function FeaturedTrainingCard({ tag, title, description, features, link }) {
    return (
        <div className="Featured_training_card_component_class animate-on-scroll">
            <div className="training-content">
                <span className="training-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="training-features">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={feature.icon} /> {feature.text}
                        </li>
                    ))}
                </ul>
                <Link href={link} className="btn btn-primary">Détails</Link>
            </div>
        </div>
    );
} 