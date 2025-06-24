import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StatCard.css';

export default function StatCard({ icon, count, text }) {
    return (
        <div className="Stat_card_component_class animate-on-scroll">
            <FontAwesomeIcon icon={icon} className="stat-icon" />
            <div className="stat-number" data-count={count}>0</div>
            <p className="stat-text">{text}</p>
        </div>
    );
} 