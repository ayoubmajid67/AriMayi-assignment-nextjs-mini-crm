'use client';

import { useState, useEffect } from 'react';
import './ClientForm.css';

export default function ClientForm({ client, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
    });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (client) {
            setFormData(client);
        } else {
            // Reset for new client
            setFormData({ nom: '', prenom: '', email: '', telephone: '' });
        }
    }, [client]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await onSave(formData);
        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="clientForm">
            <h2>{client ? 'Edit Client' : 'Add New Client'}</h2>
            <div className="formGroup">
                <label htmlFor="prenom">First Name</label>
                <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </div>
            <div className="formGroup">
                <label htmlFor="nom">Last Name</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="formGroup">
                <label htmlFor="telephone">Phone</label>
                <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
            </div>
            <div className="formActions">
                <button type="button" onClick={onCancel} className="cancelButton">Cancel</button>
                <button type="submit" className="submitButton" disabled={submitting}>
                    {submitting ? 'Saving...' : 'Save Client'}
                </button>
            </div>
        </form>
    );
}