import { NextResponse } from 'next/server';
import { findClientById } from '@/app/db/clients';
import { verifyToken } from '@/utils/auth';

export async function GET(request, { params }) {
  try {
    verifyToken(request);

    const { id } = params;

    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: 'ID du client manquant.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const client = findClientById(id);

    if (!client) {
      return new NextResponse(
        JSON.stringify({ message: 'Client introuvable.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return NextResponse.json(client);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
