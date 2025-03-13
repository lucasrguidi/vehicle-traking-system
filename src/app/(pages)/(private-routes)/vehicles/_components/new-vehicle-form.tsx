'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { newVehicleSchema } from '@/app/schemas/new-vehicle-schema';
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

interface NewVehicleFormProps {
  toggleDialog: () => void;
}

export default function NewVehicleForm({ toggleDialog }: NewVehicleFormProps) {
  const { addVehicle, isAddingVehicle } = useVehicles(toggleDialog);

  const form = useForm<z.infer<typeof newVehicleSchema>>({
    resolver: zodResolver(newVehicleSchema),
    defaultValues: {
      codigo: '',
      placa: '',
    },
  });

  async function onSubmit(values: z.infer<typeof newVehicleSchema>) {
    addVehicle(values);
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
        <Button className="w-full" type="submit" disabled={isAddingVehicle}>
          Adicionar
          {isAddingVehicle && <LoadingSpinner />}
        </Button>
      </form>
    </Form>
  );
}
