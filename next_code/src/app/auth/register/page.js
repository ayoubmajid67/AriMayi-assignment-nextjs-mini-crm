'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import AuthForm from '@/components/authForm/AuthForm';
import FormInput from '@/components/formInput/FormInput';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from '@/hooks/useSnackbar';
import { AlertSnackBar } from '@/components/alert/AlertSnackBar';
import "./Register.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();
  const { register } = useAuth();

  const {
    snackbarOpen,
    message,
    severity,
    handleSnackbarOpen,
    handleSnackbarClose,
  } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      handleSnackbarOpen("Les mots de passe ne correspondent pas.", "error");
      return;
    }

    try {
      await register({
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      handleSnackbarOpen("Inscription réussie ! Redirection en cours...", "success");
      setTimeout(() => {
        router.push('/auth/login?email=' + formData.email);
      }, 1500);
    } catch (err) {
      handleSnackbarOpen(err.message || "Erreur lors de l'inscription.", "error");
    }
  };

  return (
    <main className="RegisterPageComponentClass">
      <AuthForm
        title="Inscription"
        buttonText="S'inscrire"
        onSubmit={handleSubmit}
        footerText="Déjà un compte ?"
        footerLink="/auth/login"
        footerLinkText="Connectez-vous"
      >
        <FormInput
          name="username"
          type="text"
          placeholder="Nom d'utilisateur"
          icon={faUser}
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Adresse e-mail"
          icon={faEnvelope}
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          name="phone"
          type="tel"
          placeholder="Numéro de téléphone"
          icon={faPhone}
          value={formData.phone}
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
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          icon={faLock}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </AuthForm>

      <AlertSnackBar
        open={snackbarOpen}
        message={message}
        severity={severity}
        onClose={handleSnackbarClose}
      />
    </main>
  );
}
