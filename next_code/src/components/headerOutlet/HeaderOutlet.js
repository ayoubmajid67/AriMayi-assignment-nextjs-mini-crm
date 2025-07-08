"use client"
import "./HeaderOutlet.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import HeaderProfile from '@/components/headerProfile/HeaderProfile';

const clientsPath = "/clients";
const clientsItems = [
  { id: '', label: 'Clients'},
];

const authItems = [
  { id: 'login', label: 'Login' },
  { id: 'register', label: 'Register' },
];

export default function HeaderOutlet({ customClass, profileImg = false }) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const  {  isAuthenticated, logout } = useAuth();

  

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const isActive = (path) => {
    if (path === '/') {
      return currentPage === path;
    }
    return currentPage.startsWith(path);
  };

  const handlePageChange = (path) => {
    setCurrentPage(path);
    setIsMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="HeaderOutletComponentClass"  >
      <div className="container">
        <nav className="nav">
          <Link 
            href="/" 
            className="nav-logo"
            onClick={() => handlePageChange('/')}
          >
            <Image 
              src="/assets/logo.png" 
              alt="AriMayi  Logo" 
              className="nav-logo-img"
              width={150}
              height={55}
              priority
            />
          </Link>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => handlePageChange('/')}
              >
                Accueil
              </Link>

              {isAuthenticated && (
                <>
                
              <DropdownMenu
                className={`nav-link ${isActive('/clients') || isActive('/add-client') ? 'active' : ''}`}
                items={clientsItems}
                triggerText="Dashboard"
                basePath={clientsPath}
                onPageChange={handlePageChange}
              />
                </>
            
              )}
              {!isAuthenticated && (
           
                 <DropdownMenu
                  className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
                  items={authItems}
                  triggerText="S'identifier"
                  basePath="/auth/"
                  onPageChange={handlePageChange}
                  triggerIsLink={false}
                />
              
              
               

                
              )}    
              {isAuthenticated && (
                     <>
                <HeaderProfile profileImg={profileImg} />
                <button 
                className="sign-out-btn" 
                aria-label="sign out"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
              </>
              )}
              
            </div>
      
          <button 
            className="nav-toggle" 
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon="bars" />
          </button>
        </nav>
      </div>
    </header>
  );
}