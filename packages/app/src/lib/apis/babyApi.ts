import type { Baby } from '../types';
import { fetchApi } from './helpers';

type CreateBabyResponse = {
  baby: Baby;
};

const baseUrl = '/babies';

export const babyApi = {
  createBaby: (baby: Baby) => {
    return fetchApi<CreateBabyResponse>(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(baby),
    });
  },
};
