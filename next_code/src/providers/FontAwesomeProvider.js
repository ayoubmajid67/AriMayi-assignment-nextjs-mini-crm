'use client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUsers, 
  faBuilding, 
  faCertificate, 
  faChalkboardTeacher,
  faGraduationCap,
  faLightbulb,
  faChartLine,
  faUsersCog,
  faFlask,
  faClock,
  faSignal,
  faLaptop,
  faQuoteLeft,
  faChevronDown,
  faArrowRight,
  faMicroscope,
  faComments,
  faUserTie,
  faBars,
  faSchool,
  faBriefcase,
  faHeadset,
  faHandshake,
  faProjectDiagram,
  faUser,
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faTwitter, 
  faFacebookF 
} from '@fortawesome/free-brands-svg-icons';

// Add icons to library
library.add(
  faUsers,
  faBuilding,
  faCertificate,
  faChalkboardTeacher,
  faGraduationCap,
  faLightbulb,
  faChartLine,
  faUsersCog,
  faFlask,
  faClock,
  faSignal,
  faLaptop,
  faQuoteLeft,
  faChevronDown,
  faArrowRight,
  faMicroscope,
  faComments,
  faUserTie,
  faBars,
  faSchool,
  faBriefcase,
  faHeadset,
  faHandshake,
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faProjectDiagram,
  faUser,
  faEnvelope,
  faLock
);

export default function FontAwesomeProvider({ children }) {
  return children;
} 