import type { ApiResponse, Baby } from '../types';
import { fetchApi } from './helpers';

const baseUrl = '/auth/babies';

type CreateBabyResponse = ApiResponse<Baby>;
type GetBabiesResponse = ApiResponse<Baby[]>;

interface BabyApi {
  createBaby: (baby: Partial<Baby>) => Promise<CreateBabyResponse>;
  getBabies: () => Promise<GetBabiesResponse>;
}

export const babyApi: BabyApi = {
  createBaby: (baby: Partial<Baby>) => {
    return fetchApi<Baby>(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(baby),
    });
  },

  getBabies: async () => {
    const response = await fetchApi<GetBabiesResponse>(`${baseUrl}`);

    if (response.error) {
      throw new Error(response.error.message);
    }

    console.log('response', response);

    return response.data ?? [];
  },
};
