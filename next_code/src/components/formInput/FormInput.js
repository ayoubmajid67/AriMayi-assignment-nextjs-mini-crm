'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './FormInput.css';

export default function FormInput({ icon, type, placeholder, value, onChange, name }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className="FormInputComponentClass">
            {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                className="form-input-field"
            />
            {type === 'password' && (
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                />
            )}
        </div>
    );
}
