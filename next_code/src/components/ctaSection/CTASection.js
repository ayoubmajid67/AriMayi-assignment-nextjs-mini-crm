import Link from 'next/link';
import './CTASection.css';

export default function CTASection({ 
    title, 
    description, 
    primaryButtonText, 
    primaryButtonLink, 
    secondaryButtonText, 
    secondaryButtonLink,
    variant = 'primary' // 'primary' or 'secondary'
}) {
    return (
        <section className={`CTASection_component_class ${variant}`}>
            <div className="container">
                <div className="cta-content animate-on-scroll">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="cta-buttons">
                        <Link href={primaryButtonLink} className="btn btn-primary">{primaryButtonText}</Link>
                        {secondaryButtonText && secondaryButtonLink && (
                            <Link href={secondaryButtonLink} className="btn btn-secondary">{secondaryButtonText}</Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
} 