'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useVehicles from '../vehicles/hooks/use-vehicles';
import { useEffect, useState } from 'react';
import Vehicle from '@/app/types/vehicle';
import Map from './_components/map';
import { useQueryClient } from '@tanstack/react-query';

export default function TrackingPage() {
  const queryClient = useQueryClient();

  const { vehicles } = useVehicles();

  useEffect(() => {
    function updatePos() {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    }

    const interval = setInterval(updatePos, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background h-full overflow-auto flex flex-col gap-8">
      <header>
        <div className="px-4 md:px-6 py-4 md:py-6 flex flex-col border-b border-border">
          <div className="flex justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Rastreamento
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vehicles?.map((vehicle) => {
          return (
            <div
              className="w-full flex flex-col h-fit  px-8   gap-8"
              key={vehicle.id}
            >
              <div className="flex flex-col ">
                <h1 className="text-2xl  font-bold tracking-tight">
                  Mapa do veículo
                </h1>

                <p className="text-sm font-medium text-muted-foreground ">
                  {`Código: ${vehicle.codigo}`}
                </p>
                <p className="text-sm font-medium text-muted-foreground ">
                  {`Placa: ${vehicle.placa}`}
                </p>
              </div>
              <div className="border rounded-lg overflow-hidden w-full">
                <Map vehicle={vehicle} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
