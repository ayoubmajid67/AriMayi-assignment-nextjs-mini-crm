import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import './TestimonialCard.css';

export default function TestimonialCard({ quote, name, position, image }) {
    return (
        <div className="Testimonial_card_component_class">
            <div className="testimonial-content">
                <FontAwesomeIcon icon="quote-left" />
                <p>{quote}</p>
                <div className="testimonial-author">
                    <Image 
                        src={image} 
                        alt={name} 
                        className="testimonial-avatar"
                        width={60}
                        height={60}
                    />
                    <div className="testimonial-info">
                        <h4>{name}</h4>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 