'use client';

import './FormGroup.css';

export default function FormGroup({ 
    type = 'text',
    id,
    name,
    label,
    required = false,
    options = [],
    className = ''
}) {
    const renderInput = () => {
        switch (type) {
            case 'select':
                return (
                    <select id={id} name={name} className={`form-input ${className}`} required={required}>
                        <option value="">Sélectionnez une option</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'textarea':
                return (
                    <textarea
                        id={id}
                        name={name}
                        className={`form-input ${className}`}
                        rows="5"
                        required={required}
                    />
                );
            case 'checkbox':
                return (
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id={id}
                            name={name}
                            className={`form-input ${className}`}
                            required={required}
                        />
                        <label htmlFor={id} className="checkbox-label">
                            {label}
                        </label>
                    </div>
                );
            case 'file':
                return (
                    <div className="file-input-group">
                        <input
                            type="file"
                            id={id}
                            name={name}
                            className={`form-input ${className}`}
                            required={required}
                            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                        />
                        <label htmlFor={id} className="file-input-label">
                            <span className="file-input-text">Choisir un fichier</span>
                            <span className="file-input-button">Parcourir</span>
                        </label>
                    </div>
                );
            default:
                return (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        className={`form-input ${className}`}
                        required={required}
                    />
                );
        }
    };

    if (type === 'checkbox') {
        return <div className="form-group">{renderInput()}</div>;
    }

    return (
        <div className="Form-group-component_class">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            {renderInput()}
        </div>
    );
} 