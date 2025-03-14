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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useVehicles from '../hooks/use-vehicles';
import { useState } from 'react';
import MapInput, { Coordinates } from './map-input';

interface NewVehicleFormProps {
  toggleDialog: () => void;
}

export default function NewVehicleForm({ toggleDialog }: NewVehicleFormProps) {
  const { addVehicle, isAddingVehicle } = useVehicles(toggleDialog);

  const [location, setLocation] = useState<Coordinates | null>(null);
  const handleLocationSelect = (coords: Coordinates) => {
    setLocation(coords);
    form.setValue('ultima_latitude', coords.lat.toString());
    form.setValue('ultima_longitude', coords.lng.toString());
  };

  const form = useForm<z.infer<typeof newVehicleSchema>>({
    resolver: zodResolver(newVehicleSchema),
    defaultValues: {
      codigo: '',
      placa: '',
      is_active: true,
      is_online: true,
      ultima_latitude: location?.lat.toString() || '0',
      ultima_longitude: location?.lng.toString() || '0',
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
        <div className="w-full flex flex-col gap-2">
          <div>
            <FormLabel>Selecione a localização no mapa:</FormLabel>
            <FormDescription>
              Campo para simular ultima latitude e ultima longitude
            </FormDescription>
          </div>

          <MapInput onLocationSelect={handleLocationSelect} />
        </div>

        <FormField
          control={form.control}
          name="ultima_latitude"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ultima_longitude"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
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
