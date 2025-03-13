export default interface Vehicle {
  id: number;
  codigo: string;
  placa: string;
  ultimo_rastreamento?: Date;
  ultima_data?: Date;
  ultima_latitude?: number;
  ultima_longitude?: number;
  is_active?: boolean;
  is_online?: boolean;
  user: number;
}
