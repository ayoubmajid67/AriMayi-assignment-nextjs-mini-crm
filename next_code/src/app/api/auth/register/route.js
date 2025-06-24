import { NextResponse } from 'next/server';
import { findUserByEmail, addUser } from '@/app/db/users';


export async function POST(request) {
    const { username, email, password, phone } = await request.json();

    if (!username || !email || !password || !phone) {
        return new NextResponse(
            JSON.stringify({ message: 'Missing required fields' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const existingUser = findUserByEmail(email);
    if (existingUser) {
        return new NextResponse(
            JSON.stringify({ message: 'User with this email already exists' }),
            { status: 409, headers: { 'Content-Type': 'application/json' } }
        );
    }

   const user = addUser({ username, email, password, phone  , createdAt: new Date() });

    const { password: _, ...userToReturn } = user;

    return NextResponse.json({ message: 'User registered successfully', user: userToReturn });
}