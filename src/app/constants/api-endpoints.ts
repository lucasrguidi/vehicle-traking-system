export const API_ENDPOINTS = {
  BASE_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
  LOGIN: `${process.env.NEXT_PUBLIC_API_URL}/auth/login/`,
  VALIDATE_TOKEN: `${process.env.NEXT_PUBLIC_API_URL}/auth/me/`,
  REFRESH_TOKEN: `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh/`,
  VEHICLES: `${process.env.NEXT_PUBLIC_API_URL}/vehicles/`,
  DASHBOARD_TOTAL_ATIVOS: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/total_ativos/`,
  DASHBOARD_VEICULOS_ONLINE: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/veiculos_online/`,
};
