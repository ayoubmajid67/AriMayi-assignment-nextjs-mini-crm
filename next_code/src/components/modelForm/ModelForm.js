'use client';

import { useState, useEffect } from 'react';
import './ModelForm.css';

export default function ModelForm({ title, fields, data, onSave, onCancel }) {
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const initialState = {};
    fields.forEach(field => {
      initialState[field.name] = data?.[field.name] || '';
    });
    setFormData(initialState);
  }, [data, fields]);

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
    <form onSubmit={handleSubmit} className="ModelFormComponentClass">
      <h2>{title}</h2>

      {fields.map(field => (
        <div className="formGroup" key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
          />
        </div>
      ))}

      <div className="formActions">
        <button type="button" onClick={onCancel} className="cancelButton">Cancel</button>
        <button type="submit" className="submitButton" disabled={submitting}>
          {submitting ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
