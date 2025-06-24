'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoItem.css';

export default function InfoItem({ icon, title, content }) {
    return (
        <div className="Info_item_component_class">
            <FontAwesomeIcon icon={icon} className="info-icon" />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
} 