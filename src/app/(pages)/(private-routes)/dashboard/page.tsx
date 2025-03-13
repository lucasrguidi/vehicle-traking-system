'use client';

import { Button } from '@/components/ui/button';
import { ChartConfig } from '@/components/ui/chart';
import { Plus, Search } from 'lucide-react';
import * as React from 'react';

import { DateRange } from 'react-day-picker';
import { ActiveVehiclesChart } from './_components/active-vehicles-chart';

const dateRange = {
  from: new Date(2024, 0, 1), // January 1, 2024
  to: new Date(2024, 6, 31), // December 31, 2024
};

const statsData = {
  revenue: {
    value: 40199.05,
    change: 15.11,
    trend: 'up',
  },
  totalOrders: {
    value: 1789,
    change: 25.66,
    trend: 'up',
  },
  newOrders: {
    value: 341,
    change: 11.23,
    trend: 'up',
  },
  refunds: {
    value: 11,
    change: -4.51,
    trend: 'down',
  },
};

const chartData = [
  { month: 'January', current: 186, previous: 80 },
  { month: 'February', current: 305, previous: 200 },
  { month: 'March', current: 237, previous: 120 },
  { month: 'April', current: 73, previous: 190 },
  { month: 'May', current: 209, previous: 130 },
  { month: 'June', current: 214, previous: 140 },
];

const chartConfig = {
  current: {
    label: 'Chosen Period',
    color: 'hsl(var(--chart-1))',
  },
  previous: {
    label: 'Last Period',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function DashboardPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: dateRange.from,
    to: dateRange.to,
  });

  const [selectedProduct, setSelectedProduct] = React.useState('All');
  const [timeframe, setTimeframe] = React.useState('Daily');
  const [orderStatus, setOrderStatus] = React.useState('All orders');

  return (
    <div className="bg-background h-full overflow-auto">
      <header>
        <div className="px-4 md:px-6 py-4 md:py-6 flex flex-col border-b border-border">
          <div className="flex justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Orders
              </h1>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="px-3 md:px-4">
                <Search /> <span className="hidden md:block">Search</span>
              </Button>
              <Button className="px-3 md:px-4">
                <Plus /> <span className="hidden md:block">New</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full h-full flex justify-center items-center">
        <ActiveVehiclesChart />
      </div>
    </div>
  );
}
