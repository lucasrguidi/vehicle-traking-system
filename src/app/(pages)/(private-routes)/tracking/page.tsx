'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useVehicles from '../vehicles/hooks/use-vehicles';
import { useState } from 'react';
import Vehicle from '@/app/types/vehicle';
import Map from './_components/map';

export default function TrackingPage() {
  const { vehicles } = useVehicles();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

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

            <Select
              onValueChange={(v) =>
                setSelectedVehicle(
                  vehicles?.find((vehicle) => vehicle.id.toString() === v) ||
                    null
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um veículo (código)" />
              </SelectTrigger>
              <SelectContent>
                {vehicles?.map((vehicle) => {
                  return (
                    <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                      {vehicle.codigo}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="w-full flex flex-col h-fit  px-8   gap-8">
        <div className="flex flex-col ">
          <h1 className="text-2xl  font-bold tracking-tight">
            Mapa do veículo
          </h1>
          {selectedVehicle && (
            <>
              <p className="text-sm font-medium text-muted-foreground ">
                {`Código: ${selectedVehicle?.codigo}`}
              </p>
              <p className="text-sm font-medium text-muted-foreground ">
                {`Placa: ${selectedVehicle?.placa}`}
              </p>
            </>
          )}
        </div>
        <div className="border rounded-lg overflow-hidden w-full">
          {selectedVehicle && <Map vehicle={selectedVehicle} />}
        </div>
      </div>
    </div>
  );
}
