'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { newVehicleSchema } from '@/app/schemas/new-vehicle-schema';
import { LoadingSpinner } from '@/components/custom/loading-spinner';
import { Checkbox } from '@/components/ui/checkbox';
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
      is_active: true,
      is_online: true,
    },
  });

  async function onSubmit(values: z.infer<typeof newVehicleSchema>) {
    addVehicle(values);
    console.log('🚀 ~ onSubmit ~ values:', values);
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
        <Button className="w-full" type="submit" disabled={isAddingVehicle}>
          Adicionar
          {isAddingVehicle && <LoadingSpinner />}
        </Button>
      </form>
    </Form>
  );
}
