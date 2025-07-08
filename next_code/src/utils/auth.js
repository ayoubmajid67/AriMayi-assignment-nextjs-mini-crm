import { getCookie } from '@/service/cookieService';
import jwt from 'jsonwebtoken';

 export const jwtExpirationTime = parseInt(process.env.NEXT_PUBLIC_JWT_EXPIRATION_TIME || "24", 10);
export const verifyToken = (request) => {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Token manquant ou invalide');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; 
  } catch (err) {
    throw new Error('Token invalide ou expiré');
  }
};

export const getAuthHeaders = () => {
  const token = getCookie('authToken');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};
