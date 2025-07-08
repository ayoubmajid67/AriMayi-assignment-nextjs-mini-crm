'use client';

import { createContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '@/service/authService';
export const AuthContext = createContext(null);

import { dropAuthToken, setAuthToken,getAuthToken } from '@/service/cookieService';

export default function AuthProvider({ children }) {

   

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getAuthToken(); 
        if (token) {

            setUser({ token });
        }
        setLoading(false);
    }, []);


    const login = async (credentials) => {
        const { user, token } = await loginService(credentials);
         setAuthToken(token); 
        setUser(user);
    };

    const register = async (userData) => {
        return await registerService(userData);
      
    };

    const logout = () => {
        dropAuthToken(); 
     
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
