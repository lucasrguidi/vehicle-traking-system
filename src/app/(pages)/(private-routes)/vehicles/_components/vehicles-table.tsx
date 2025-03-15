'use client';
import Vehicle from '@/app/types/vehicle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import useVehicles from '../hooks/use-vehicles';
import NewVehicleDialog from './new-vehicle-dialog';

interface VehiclesTableProps {
  vehicles: Vehicle[];
  isLoading: boolean;
  isError: boolean;
}

export default function VehiclesTable({
  vehicles,
  isLoading,
  isError,
}: VehiclesTableProps) {
  const { removeVehicle, isRemovingVehicle } = useVehicles();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Código</TableHead>
          <TableHead className="w-[120px]">Placa</TableHead>
          <TableHead className="w-[300px]">Último rastreamento</TableHead>
          <TableHead className="w-[250px]">Última data</TableHead>
          <TableHead className="w-[120px]">Ativo</TableHead>
          <TableHead className="w-[120px]">Online</TableHead>
          <TableHead className="w-[50px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell colSpan={7}>
                <div className="h-12 bg-muted/50 rounded animate-pulse" />
              </TableCell>
            </TableRow>
          ))
        ) : isError ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-6 text-red-500">
              Ocorreu um erro ao carregar os veículos.
            </TableCell>
          </TableRow>
        ) : vehicles.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
              Nenhum veículo encontrado.
            </TableCell>
          </TableRow>
        ) : (
          vehicles.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.codigo}</TableCell>
              <TableCell className="font-medium">{row.placa}</TableCell>
              <TableCell className="font-medium">
                {row.ultimo_rastreamento
                  ? row.ultimo_rastreamento.toString()
                  : 'N/A'}
              </TableCell>
              <TableCell className="font-medium">
                {row.ultima_data ? row.ultima_data.toString() : 'N/A'}
              </TableCell>
              <TableCell>{row.is_active ? 'Ativo' : 'Inativo'}</TableCell>
              <TableCell>{row.is_online ? 'Sim' : 'Não'}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <NewVehicleDialog vehicle={row}>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        Editar veículo
                      </DropdownMenuItem>
                    </NewVehicleDialog>
                    <DropdownMenuItem
                      onClick={() => removeVehicle(row.id.toString())}
                    >
                      Remover veículo
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
