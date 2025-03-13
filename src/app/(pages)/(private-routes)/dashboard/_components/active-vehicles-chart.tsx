'use client';

import { Pie, PieChart } from 'recharts';

import { LoadingSpinner } from '@/components/custom/loading-spinner';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';
import useActiveVehiclesChart from '../hooks/use-active-vehicles-chart';

export const description = 'A simple pie chart';

export function ActiveVehiclesChart() {
  const {
    activeVehicles,
    totalVehicles,
    inactiveVehicles,
    isLoadingActiveVehiclesResponse,
  } = useActiveVehiclesChart();

  const chartData = [
    { vehicles: 'active', quantity: activeVehicles, fill: 'var(--chart-1)' },
    {
      vehicles: 'inactive',
      quantity: inactiveVehicles,
      fill: 'var(--chart-4)',
    },
  ];

  const chartConfig = {
    active: {
      label: 'Ativos',
      color: 'var(--chart-1)',
    },
    inactive: {
      label: 'Inativos',
      color: 'var(--chart-4)',
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Veículos ativos</CardTitle>
        <CardDescription>Total de veículos: {totalVehicles}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 h-full pb-0">
        {isLoadingActiveVehiclesResponse && (
          <div className="items-center w-full h-full flex justify-center">
            <LoadingSpinner />
          </div>
        )}

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="quantity" nameKey="vehicles" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Média de veículos ativos subiu X% em relação ao último mês{' '}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Mostrando total de veículos, ativos e inativos
        </div>
      </CardFooter>
    </Card>
  );
}
