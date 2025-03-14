import {
  getActiveVehicles,
  getOnlineVehicles,
} from '@/app/services/chart-service';
import { useQuery } from '@tanstack/react-query';
import useVehicles from '../../vehicles/hooks/use-vehicles';

export default function useOnlineVehiclesChart() {
  const { vehicles } = useVehicles();

  const totalVehicles = vehicles?.length;

  const {
    data: onlineVehiclesResponse,
    isLoading: isLoadingOnlineVehiclesResponse,
  } = useQuery({
    queryKey: ['getOnlineVehicles'],
    queryFn: getOnlineVehicles,
  });

  const onlineVehicles = onlineVehiclesResponse?.veiculos_online;

  const offlineVehicles = totalVehicles! - onlineVehicles!;

  return {
    totalVehicles,
    onlineVehicles,
    offlineVehicles,
    isLoadingOnlineVehiclesResponse,
  };
}
