'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import Vehicle from '@/app/types/vehicle';
import { LoadingSpinner } from '@/components/custom/loading-spinner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useVehicles from '../hooks/use-vehicles';
import { editVehicleSchema } from '@/app/schemas/edit-vehicle-schema';
import { Checkbox } from '@/components/ui/checkbox';

interface EditVehicleFormProps {
  vehicle: Vehicle;
  toggleDialog: () => void;
}

export default function EditVehicleForm({
  toggleDialog,
  vehicle,
}: EditVehicleFormProps) {
  const { updateVehicle, isUpdatingVehicle } = useVehicles(toggleDialog);

  const form = useForm<z.infer<typeof editVehicleSchema>>({
    resolver: zodResolver(editVehicleSchema),
    defaultValues: {
      codigo: vehicle.codigo,
      placa: vehicle.placa,
      is_active: vehicle.is_active,
      is_online: vehicle.is_online,
    },
  });

  async function onSubmit(values: z.infer<typeof editVehicleSchema>) {
    updateVehicle({ id: vehicle.id.toString(), values });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="codigo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placa</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Ativo</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_online"
          render={({ field }) => (
            <FormItem className="flex gap-2 items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Online</FormLabel>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isUpdatingVehicle}>
          Salvar
          {isUpdatingVehicle && <LoadingSpinner />}
        </Button>
      </form>
    </Form>
  );
}
