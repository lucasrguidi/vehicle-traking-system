import { API_ENDPOINTS } from '../constants/api-endpoints';

async function getVehicles() {
  const response = await fetch(API_ENDPOINTS.GET_VEHICLES);
  console.log('🚀 ~ getVehicles ~ response:', response);
  const data = response.json();
  return data;
}

export { getVehicles };
