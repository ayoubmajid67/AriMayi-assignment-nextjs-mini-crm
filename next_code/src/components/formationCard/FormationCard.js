'use client';

import Link from 'next/link';
import Image from 'next/image';
import "./FormationCard.css";

export default function FormationCard({
    title,
    description,
    duration,
    level,
    certification,
    image,
    category
}) {
    return (
        <div className="FormationCardComponentClass" data-category={category}>
            <div className="formation-image">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className="image"
                />
            </div>
            <div className="formation-content">
                <h3>{title}</h3>
                <p className="formation-description">{description}</p>
                <div className="formation-details">
                    <span className="detail-item">
                        <i className="fas fa-clock"></i>
                        <span>{duration}</span>
                    </span>
                    <span className="detail-item">
                        <i className="fas fa-signal"></i>
                        <span>{level}</span>
                    </span>
                    <span className="detail-item">
                        <i className="fas fa-certificate"></i>
                        <span>{certification}</span>
                    </span>
                </div>
                <Link href="/contact" className="btn btn-primary">
                    Demander un devis
                </Link>
            </div>
        </div>
    );
} 