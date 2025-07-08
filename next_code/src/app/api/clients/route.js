import { NextResponse } from 'next/server';
import {
  getClients,
  addClient,
  deleteClient,
  updateClient,
  findClientById,
  findClientByEmail,
} from '@/app/db/clients';
import { verifyToken } from '@/utils/auth';



export async function GET(request) {
  try {
    verifyToken(request);
    const clients = getClients();
    return NextResponse.json(clients);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    verifyToken(request);


    
    const data = await request.json();
    const { nom, prenom, email, telephone } = data;

    if (!nom || !prenom || !email || !telephone) {
      return new NextResponse(
        JSON.stringify({ message: 'Tous les champs sont obligatoires.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const existingClient = findClientByEmail(email);
    if (existingClient) {
      return new NextResponse(
        JSON.stringify({ message: 'Client avec ce email existe déjà.' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const newClient = addClient(data);
    return NextResponse.json(newClient, { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request) {
  try {
    verifyToken(request);

    const data = await request.json();
    const { id, ...updatedFields } = data;

    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: 'ID client requis pour mise à jour.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedClient = updateClient(id, updatedFields);

    if (!updatedClient) {
      return new NextResponse(
        JSON.stringify({ message: 'Client introuvable.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return NextResponse.json(updatedClient);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(request) {
  try {

    
    console.log('Received DELETE request for clients');
    verifyToken(request);


    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: 'ID client requis pour suppression.' }),
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

    deleteClient(id);
    
    return NextResponse.json({ message: 'Client supprimé avec succès.' });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
