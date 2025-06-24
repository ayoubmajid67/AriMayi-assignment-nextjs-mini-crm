import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhyChooseUsCard.css';

export default function WhyChooseUsCard({ icon, title, description }) {
    return (
        <div className="Why_choose_us_card_component_class animate-on-scroll">
            <div className="why-choose-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="why-choose-title">{title}</h3>
            <p className="why-choose-description">{description}</p>
        </div>
    );
} 