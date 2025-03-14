async function getActiveVehicles(): Promise<
  | {
      total_ativos: number;
    }
  | undefined
> {
  try {
    const response = await fetch('/api/dashboard/total_ativos', {
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
      throw new Error('Um erro ocorreu ao carregar os dados: ' + error.message);
    }
    throw error;
  }
}

async function getOnlineVehicles(): Promise<
  | {
      veiculos_online: number;
    }
  | undefined
> {
  try {
    const response = await fetch('/api/dashboard/veiculos_online', {
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
      throw new Error('Um erro ocorreu ao carregar os dados: ' + error.message);
    }
    throw error;
  }
}

export { getActiveVehicles, getOnlineVehicles };
