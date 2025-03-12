import { getVehicles } from '@/app/services/vehicle-service';
import { useQuery } from '@tanstack/react-query';

export default function useVehicles() {
  const { data: vehicles, isLoading: isLoadingVehicles } = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
  });

  return { vehicles, isLoadingVehicles };
}
