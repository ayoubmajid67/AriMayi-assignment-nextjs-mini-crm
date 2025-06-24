'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './AddClient.css'; 

export default function AddClientPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add client');
            }

            // On success, redirect to the clients list
            router.push('/clients');

        } catch (err) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="PageComponentClass AddClientPageComponentClass">
            <h1>Add New Client</h1>
            <form onSubmit={handleSubmit} className="addClientForm">
                <div className="formGroup">
                    <label htmlFor="prenom">First Name</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="nom">Last Name</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="telephone">Phone</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {error && <p className="errorMessage">{error}</p>}

                <button type="submit" className="submitButton" disabled={submitting}>
                    {submitting ? 'Adding...' : 'Add Client'}
                </button>
            </form>
        </main>
    );
}
