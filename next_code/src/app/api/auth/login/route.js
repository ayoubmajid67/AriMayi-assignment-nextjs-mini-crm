import { NextResponse } from 'next/server';
import { findUserByEmail } from '@/app/db/users';
import jwt from 'jsonwebtoken';


export async function POST(request) {
    const { email, password } = await request.json();

    if (!email || !password) {
        return new NextResponse(
            JSON.stringify({ message: 'Email and password are required' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
        return new NextResponse(
            JSON.stringify({ message: 'Invalid credentials' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // Create JWT payload
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
    };

    // Sign the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '24h', 
    });

    const { password: _, ...userToReturn } = user;

    return NextResponse.json({ user: userToReturn, token });
}