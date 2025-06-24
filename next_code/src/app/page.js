'use client';

import "./Home.css";
import Link from "next/link";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';

import StatCard from '../components/statCard/StatCard';
import ServiceCard from '@/components/serviceCard/ServiceCard';
import WhyChooseUsCard from '../components/whyChooseUsCard/WhyChooseUsCard';
import TestimonialCard from '../components/testimonialCard/TestimonialCard';
import FeaturedTrainingCard from '../components/featuredTrainingCard/FeaturedTrainingCard';
import CTASection from '../components/ctaSection/CTASection';

import { addOnScrollObserver, cleanOnScrollObserver } from "../utils/animations";
import { testimonials, services, whyChooseUs, featuredTrainings, statsData } from '@/data/general';
import { SwiperProvider, useSwiper } from '../providers/SwiperProvider';

function HomePageContent() {
	const { defaultSwiperConfig } = useSwiper();

	useEffect(() => {
		const [animatedElements, animationObserver] = addOnScrollObserver();
		return () => cleanOnScrollObserver(animatedElements, animationObserver);
	}, []);

	return (
		<main className="PageComponentClass HomeComponentClass">
			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1 className="hero-title animate-on-scroll">AriMayi</h1>
						<p className="hero-subtitle animate-on-scroll">
							Apprenez par la pratique. Intégrez des projets réels. Préparez votre avenir.
						</p>
						<div className="hero-cta animate-on-scroll">
							<Link href="/contact" className="btn btn-primary">Contactez-nous</Link>
							<Link href="/formations" className="btn btn-secondary">Voir nos parcours</Link>
						</div>
					</div>
				</div>
				<div className="hero-scroll-indicator">
					<Link href="#pourQuioNousChoisir">
						<FontAwesomeIcon icon="chevron-down" />
					</Link>
				</div>
			</section>

			{/* Stats Section */}
			<section className="section stats-section">
				<div className="container">
					<div className="grid grid-4">
						{statsData.map((stat) => (
							<StatCard
								key={stat.id}
								icon={stat.icon}
								count={stat.count}
								text={stat.text}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="section bg-light" id="pourQuioNousChoisir">
				<div className="container">
					<h2 className="section-title animate-on-scroll">Pourquoi AriMayi ?</h2>
					<div className="grid grid-3">
						{whyChooseUs.map((item) => (
							<WhyChooseUsCard
								key={item.id}
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Featured Services */}
			<section className="section bg-white" id="services">
				<div className="container">
					<h2 className="section-title animate-on-scroll">Nos Solutions</h2>
					<div className="grid grid-3">
						{services.map((service) => (
							<ServiceCard
								key={service.id}
								icon={service.icon}
								title={service.title}
								description={service.description}
								link={service.link}
							/>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection
				variant="primary"
				title="Prêt à lancer votre parcours tech ?"
				description="Rejoignez une formation concrète et professionnalisante dès aujourd’hui."
				primaryButtonText="Nous contacter"
				primaryButtonLink="/contact"
				secondaryButtonText="Voir les formations"
				secondaryButtonLink="/formations"
			/>

			{/* Featured Trainings */}
			<section className="section bg-white">
				<div className="container">
					<h2 className="section-title animate-on-scroll">Nos Parcours Phares</h2>
					<div className="grid grid-2">
						{featuredTrainings.map((training) => (
							<FeaturedTrainingCard
								key={training.id}
								tag={training.tag}
								title={training.title}
								description={training.description}
								features={training.features}
								link={training.link}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="section testimonials-section bg-light">
				<div className="container">
					<h2 className="section-title animate-on-scroll">Témoignages</h2>
					<Swiper {...defaultSwiperConfig} className="testimonials-slider">
						{testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<TestimonialCard
									quote={testimonial.quote}
									name={testimonial.name}
									position={testimonial.position}
									image={testimonial.image}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Secondary CTA Section */}
			<CTASection
				variant="secondary"
				title="Un projet, un objectif, une équipe"
				description="AriMayi vous accompagne dans vos ambitions tech et digitales."
				primaryButtonText="Discutons ensemble"
				primaryButtonLink="/contact"
				secondaryButtonText="Découvrir AriMayi"
				secondaryButtonLink="/formations"
			/>
		</main>
	);
}

export default function HomePage() {
	return (
		<SwiperProvider>
			<HomePageContent />
		</SwiperProvider>
	);
}
