import type { Baby, BabyWithCaregivers } from '../types';
import { fetchApi } from './helpers';

const baseUrl = '/auth/babies';

export const babyApi = {
  createBaby: (baby: Partial<Baby>) => {
    return fetchApi<{ data: Baby; error: null }>(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(baby),
    });
  },

  getBabies: () => {
    return fetchApi<{ data: Baby[]; error: null }>(`${baseUrl}`);
  },
};
