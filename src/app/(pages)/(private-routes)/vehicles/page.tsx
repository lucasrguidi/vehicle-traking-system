'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal, Plus, Search } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useVehicles from './hooks/use-vehicles';

const tableData = [
  {
    id: '#2999',
    status: 'Paid',
    customer: {
      name: 'Josh Adams',
      email: 'josh.adams@example.com',
      avatar: 'https://github.com/shadcn.png',
    },
    product: 'Figma UI kit',
    revenue: 199.0,
  },
  {
    id: '#3000',
    status: 'Refunded',
    customer: {
      name: 'Sarah Miller',
      email: 'sarah.m@example.com',
      avatar: 'https://github.com/shadcn.png',
    },
    product: 'Website Template',
    revenue: 149.0,
  },
  {
    id: '#3001',
    status: 'Paid',
    customer: {
      name: 'James Wilson',
      email: 'j.wilson@example.com',
    },
    product: 'Premium Icons Pack',
    revenue: 79.0,
  },
  {
    id: '#3002',
    status: 'Chargeback',
    customer: {
      name: 'Emily Chen',
      email: 'emily.chen@example.com',
      avatar: 'https://github.com/shadcn.png',
    },
    product: 'Annual Subscription',
    revenue: 299.0,
  },
  {
    id: '#3003',
    status: 'Paid',
    customer: {
      name: 'Michael Brown',
      email: 'm.brown@example.com',
      avatar: 'https://github.com/shadcn.png',
    },
    product: 'UI Component Library',
    revenue: 159.0,
  },
  {
    id: '#3004',
    status: 'Paid',
    customer: {
      name: 'Lisa Anderson',
      email: 'l.anderson@example.com',
    },
    product: 'Design System',
    revenue: 249.0,
  },
  {
    id: '#3005',
    status: 'Refunded',
    customer: {
      name: 'David Park',
      email: 'd.park@example.com',
    },
    product: 'Mobile App UI Kit',
    revenue: 189.0,
  },
  {
    id: '#3006',
    status: 'Paid',
    customer: {
      name: 'Rachel Green',
      email: 'r.green@example.com',
      avatar: 'https://github.com/shadcn.png',
    },
    product: 'Wireframe Kit',
    revenue: 129.0,
  },
];

export default function VehiclesPage() {
  const { vehicles } = useVehicles();
  console.log('🚀 ~ VehiclesPage ~ vehicles:', vehicles);

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
              <Button className="px-3 md:px-4">
                <Plus /> <span className="hidden md:block">New</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-6 flex flex-col gap-6">
        <div className="space-y-4">
          <div className="flex justify-between lg:flex-row flex-col gap-4">
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search orders" className="pl-8" />
            </div>
          </div>

          <div className="relative overflow-hidden border rounded-lg">
            <div className="overflow-auto">
              <div className="min-w-[1000px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead className="w-[100px]">#</TableHead>
                      <TableHead className="w-[120px]">Status</TableHead>
                      <TableHead className="w-[300px]">Customer</TableHead>
                      <TableHead className="w-[250px]">Product</TableHead>
                      <TableHead className="w-[120px] text-right">
                        Revenue
                      </TableHead>
                      <TableHead className="w-[70px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{row.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              row.status === 'Paid'
                                ? 'default'
                                : row.status === 'Refunded' ||
                                    row.status === 'Chargeback'
                                  ? 'outline'
                                  : 'secondary'
                            }
                            className={
                              row.status === 'Paid'
                                ? 'bg-green-600/10 text-green-600 hover:bg-green-50/80'
                                : ''
                            }
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage
                                src={row.customer.avatar}
                                alt={row.customer.name}
                              />
                              <AvatarFallback>
                                {row.customer.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{row.customer.name}</p>
                              <p className="text-muted-foreground">
                                {row.customer.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{row.product}</TableCell>
                        <TableCell className="text-right">
                          ${row.revenue.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                Refund payment
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Re-send receipt
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Share online receipt
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Generate invoice
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center mt-4">
            <Pagination className="justify-end hidden md:flex">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <div className="flex justify-end items-center space-x-2 md:hidden">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
