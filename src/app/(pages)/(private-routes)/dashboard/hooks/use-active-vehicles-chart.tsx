import { getActiveVehicles } from '@/app/services/chart-service';
import { useQuery } from '@tanstack/react-query';
import useVehicles from '../../vehicles/hooks/use-vehicles';

export default function useActiveVehiclesChart() {
  const { vehicles } = useVehicles();

  const totalVehicles = vehicles?.length;

  const {
    data: activeVehiclesResponse,
    isLoading: isLoadingActiveVehiclesResponse,
  } = useQuery({
    queryKey: ['getActiveVehicles'],
    queryFn: getActiveVehicles,
  });

  const activeVehicles = activeVehiclesResponse?.total_ativos;

  const inactiveVehicles = totalVehicles! - activeVehicles!;

  return {
    totalVehicles,
    activeVehicles,
    inactiveVehicles,
    isLoadingActiveVehiclesResponse,
  };
}
