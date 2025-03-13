'use client';
import { getVehicles } from '@/app/services/vehicle-service';
import { LoadingSpinner } from '@/components/custom/loading-spinner';
import { useQuery } from '@tanstack/react-query';
import NewVehicleDialog from './_components/new-vehicle-dialog';
import VehiclesTable from './_components/vehicles-table';

export default function VehiclesPage() {
  const { data: vehicles } = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
  });

  return (
    <div className="bg-background h-full overflow-auto">
      <header>
        <div className="px-4 md:px-6 py-4 md:py-6 flex flex-col border-b border-border">
          <div className="flex justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Veículos
              </h1>
            </div>

            <NewVehicleDialog />
          </div>
        </div>
      </header>

      <div className="p-4 md:p-6 flex flex-col gap-6">
        <div className="space-y-4">
          <div className="relative overflow-hidden border rounded-lg">
            <div className="overflow-auto">
              <div className="min-w-[1000px]">
                {!vehicles && <LoadingSpinner />}
                {vehicles && <VehiclesTable vehicles={vehicles} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
