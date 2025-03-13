import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle as updateVehicleFn,
} from '@/app/services/vehicle-service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function useVehicles(onSuccess?: () => void) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: vehicles, isLoading: isLoadingVehicles } = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
  });

  const { mutate: addVehicle, isPending: isAddingVehicle } = useMutation({
    mutationFn: createVehicle,
    onSuccess: () => {
      toast.success('Veículo cadastrado com sucesso.');
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: removeVehicle, isPending: isRemovingVehicle } = useMutation({
    mutationFn: deleteVehicle,
    onSuccess: () => {
      toast.success('Veículo deletado com sucesso.');
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: updateVehicle, isPending: isUpdatingVehicle } = useMutation({
    mutationFn: updateVehicleFn,
    onSuccess: () => {
      toast.success('Veículo atualizado com sucesso.');
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    vehicles,
    isLoadingVehicles,
    addVehicle,
    isAddingVehicle,
    removeVehicle,
    isRemovingVehicle,
    updateVehicle,
    isUpdatingVehicle,
  };
}
