import { API_ENDPOINTS } from '@/app/constants/api-endpoints';
import { auth } from '@/app/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    const token = session?.access;

    if (!token) {
      return NextResponse.json({ error: 'Sem autorização' }, { status: 401 });
    }

    const response = await fetch(API_ENDPOINTS.DASHBOARD_VEICULOS_ONLINE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erro ao carregar dados', details: errorData },
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
