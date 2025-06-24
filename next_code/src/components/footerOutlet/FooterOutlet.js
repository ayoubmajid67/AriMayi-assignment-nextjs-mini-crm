'use client';

// internal imports :
import "./FooterOutlet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { contactInfo } from "@/data/general";

//external imports :
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function FooterOutlet({targetPage=""}) {
	
	return (
			<footer className={`FooterOutletComponentClass ${targetPage} `}>
        <div className="container">
            <div className="grid grid-4">
                <div className="footer-col">
                    <h3 className="footer-title">{contactInfo.name}</h3>
                    <p>{contactInfo.description}</p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-title">Services</h3>
                    <ul className="footer-links">
                        <li><Link href="/#services" className="footer-link">Formations en situation de travail</Link></li>
                        <li><Link href="/#services" className="footer-link">Préparation opérationnelle à l’emploi</Link></li>
                        <li><Link href="#serives" className="footer-link">Accompagnement personnalisé</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-contact">
                        <li>Email: {contactInfo.email}</li>
                        <li>Tél: {contactInfo.phone}</li>
                        <li>Adresse: {contactInfo.address}</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-title">Suivez-nous</h3>
                    <div className="social-links">
                        <a href={contactInfo.social.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                      
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 AriMayi.  Tous droits réservés.</p>
            </div>
        </div>
			</footer>
	);
}
