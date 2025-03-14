'use client';

import { Button } from '@/components/ui/button';
import { ChartConfig } from '@/components/ui/chart';
import { Plus, Search } from 'lucide-react';
import * as React from 'react';

import { DateRange } from 'react-day-picker';
import { ActiveVehiclesChart } from './_components/active-vehicles-chart';
import { OnlineVehiclesChart } from './_components/online-vehicles-chart';
import useActiveVehiclesChart from './hooks/use-active-vehicles-chart';
import useOnlineVehiclesChart from './hooks/use-online-vehicles-chart';
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {
  const { totalVehicles, activeVehicles, inactiveVehicles } =
    useActiveVehiclesChart();
  const { offlineVehicles, onlineVehicles } = useOnlineVehiclesChart();

  return (
    <div className="bg-background h-full overflow-auto flex flex-col gap-8">
      <header>
        <div className="px-4 md:px-6 py-4 md:py-6 flex flex-col border-b border-border">
          <div className="flex justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Dashboard
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-8 items-center justify-center px-8">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground flex justify-between">
            Veículos Ativos
          </p>
          <p className="text-xl md:text-3xl font-semibold">{activeVehicles}</p>
        </div>
        <Separator orientation="vertical" className="h-16 hidden lg:block" />
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground flex justify-between">
            Veículos Inativos
          </p>
          <p className="text-xl md:text-3xl font-semibold">
            {inactiveVehicles}
          </p>
        </div>
        <Separator orientation="vertical" className="h-16 hidden lg:block" />
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground flex justify-between">
            Veículos Online
          </p>
          <p className="text-xl md:text-3xl font-semibold">{onlineVehicles}</p>
        </div>
        <Separator orientation="vertical" className="h-16 hidden lg:block" />
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground flex justify-between">
            Veículos Offline
          </p>
          <p className="text-xl md:text-3xl font-semibold">{offlineVehicles}</p>
        </div>
      </div>

      <Separator />

      <div className="w-full h-fit flex px-8 justify-center items-center gap-8">
        <ActiveVehiclesChart />
        <OnlineVehiclesChart />
      </div>
    </div>
  );
}
