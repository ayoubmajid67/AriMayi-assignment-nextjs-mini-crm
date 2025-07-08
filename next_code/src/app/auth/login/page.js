'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import AuthForm from '@/components/authForm/AuthForm';
import FormInput from '@/components/formInput/FormInput';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from '@/hooks/useSnackbar';
import "./Login.css";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { login } = useAuth();

  const {
    handleSnackbarOpen,
  } = useSnackbar();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setFormData(prev => ({ ...prev, email: emailFromQuery }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      handleSnackbarOpen("Connexion réussie ! Redirection...", "success");
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err) {
      handleSnackbarOpen(err.message || "Erreur de connexion.", "error");
    }
  };

  return (
    <main className="LoginPageComponentClass">
      <AuthForm
        title="Connexion"
        buttonText="Se connecter"
        onSubmit={handleSubmit}
        footerText="Pas encore de compte ?"
        footerLink="/auth/register"
        footerLinkText="Inscrivez-vous"
      >
        <FormInput
          name="email"
          type="email"
          placeholder="Adresse e-mail"
          icon={faEnvelope}
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Mot de passe"
          icon={faLock}
          value={formData.password}
          onChange={handleChange}
        />
      </AuthForm>

    </main>
  );
}
