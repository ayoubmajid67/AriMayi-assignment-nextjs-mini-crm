import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewsCard.css';

export default function NewsCard({ date, title, description, image, link }) {
    return (
        <article className="News_card_component_class animate-on-scroll">
            <div className="news-image">
                <Image 
                    src={image} 
                    alt={title}
                    width={400}
                    height={250}
                />
            </div>
            <div className="news-content">
                <span className="news-date">{date}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={link} className="btn btn-text">Lire la suite <FontAwesomeIcon icon="arrow-right" /></Link>
            </div>
        </article>
    );
} 