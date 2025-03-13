import { z } from 'zod';
import { newVehicleSchema } from '../schemas/new-vehicle-schema';
import Vehicle from '../types/vehicle';

async function getVehicles(): Promise<Vehicle[] | undefined> {
  try {
    const response = await fetch('/api/vehicles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        'Um erro ocorreu ao cadastrar o veículo: ' + error.message
      );
    }
    throw error;
  }
}

async function createVehicle(
  values: z.infer<typeof newVehicleSchema>
): Promise<Vehicle | undefined> {
  try {
    const response = await fetch('/api/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        'Um erro ocorreu ao cadastrar o veículo: ' + error.message
      );
    }
    throw error;
  }
}

async function updateVehicle({
  id,
  values,
}: {
  id: string;
  values: z.infer<typeof newVehicleSchema>;
}): Promise<Vehicle | undefined> {
  try {
    const response = await fetch(`/api/vehicles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Um erro ocorreu ao editar o veículo: ' + error.message);
    }
    throw error;
  }
}

async function deleteVehicle(id: string): Promise<void> {
  try {
    const response = await fetch(`/api/vehicles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Um erro ocorreu ao remover o veículo: ' + error.message);
    }
    throw error;
  }
}
export { createVehicle, deleteVehicle, getVehicles, updateVehicle };
