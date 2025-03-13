'use client';
import Vehicle from '@/app/types/vehicle';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import EditVehicleForm from './edit-vehicle-form';
import NewVehicleForm from './new-vehicle-form';

interface NewVehicleDialogProps {
  vehicle?: Vehicle;
  children?: React.ReactNode;
}

export default function NewVehicleDialog({
  vehicle,
  children: trigger,
}: NewVehicleDialogProps) {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button className="px-3 md:px-4">
            <Plus /> <span className="hidden md:block">Novo véiculo</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {vehicle ? 'Editar Veículo' : 'Adicionar veículo'}
          </DialogTitle>
          <DialogDescription>
            {vehicle
              ? ' Preencha os dados para editar o veículo.'
              : 'Preencha os dados para cadastrar um novo veículo.'}
          </DialogDescription>
        </DialogHeader>

        {!vehicle && <NewVehicleForm toggleDialog={toggleDialog} />}
        {vehicle && (
          <EditVehicleForm vehicle={vehicle} toggleDialog={toggleDialog} />
        )}
      </DialogContent>
    </Dialog>
  );
}
