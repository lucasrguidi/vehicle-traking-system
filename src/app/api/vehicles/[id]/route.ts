import { API_ENDPOINTS } from '@/app/constants/api-endpoints';
import { auth } from '@/app/lib/auth';
import { editVehicleSchema } from '@/app/schemas/edit-vehicle-schema';
import { newVehicleSchema } from '@/app/schemas/new-vehicle-schema';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    const token = session?.access;

    if (!token) {
      return NextResponse.json({ error: 'Sem autorização' }, { status: 401 });
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID do veículo não fornecido' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validatedData = editVehicleSchema.parse(body);

    const response = await fetch(`${API_ENDPOINTS.VEHICLES}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erro ao editar veículo', details: errorData },
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    const token = session?.access;

    if (!token) {
      return NextResponse.json({ error: 'Sem autorização' }, { status: 401 });
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID do veículo não fornecido' },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_ENDPOINTS.VEHICLES}${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Erro ao remover veículo', details: errorData },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Veículo removido com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
