'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './AuthForm.css';

export default function AuthForm({
    title,
    children,
    buttonText,
    onSubmit,
    footerText,
    footerLink,
    footerLinkText
}) {
    return (
        <div className="AuthFormComponentClass">
              <div className="auth-image-section">
                <div className="auth-image-overlay">
                    <h2>Bienvenue chez AriMayi</h2>
                    <p>Votre partenaire pour la croissance et le succès.</p>
                </div>
                <Image
                    src="/assets/backs/authBg.webp"
                    alt="Authentication background"
                    layout="fill"
                    objectFit="cover"
                    className="auth-background-image"
                />
            </div>
            <div className="auth-form-container">
                <Link href="/" className="logo-link">
                    <Image src="/assets/logo.png" alt="AriMayi Logo" width={120} height={44} />
                </Link>
                <h1 className="auth-title">{title}</h1>
                <form onSubmit={onSubmit} className="auth-form">
                    {children}
                    <button type="submit" className="btn btn-primary auth-button">
                        {buttonText}
                    </button>
                </form>
                <div className="auth-footer">
                    <p>{footerText} <Link href={footerLink}>{footerLinkText}</Link></p>
                </div>
            </div>
          
        </div>
    );
}
