'use client';

import './HeroSection.css';

export default function HeroSection({ title, subtitle }) {
    return (
        <section className="Hero_section_component_class">
            <div className="container">
                <h1 className="hero-title animate-on-scroll">{title}</h1>
                <p className="hero-subtitle animate-on-scroll">{subtitle}</p>
            </div>
        </section>
    );
}
