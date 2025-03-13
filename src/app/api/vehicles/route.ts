import { API_ENDPOINTS } from '@/app/constants/api-endpoints';
import { auth } from '@/app/lib/auth';
import { newVehicleSchema } from '@/app/schemas/new-vehicle-schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const token = session?.access;

    if (!token) {
      return NextResponse.json({ error: 'Sem autorização' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = newVehicleSchema.parse(body);

    const response = await fetch(API_ENDPOINTS.VEHICLES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erro ao criar veículo', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    const token = session?.access;

    if (!token) {
      return NextResponse.json({ error: 'Sem autorização' }, { status: 401 });
    }

    const response = await fetch(API_ENDPOINTS.VEHICLES, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erro ao carregar veículos', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
