import type { Baby } from '../types';
import { fetchApi } from './helpers';

type CreateBabyResponse = {
  // the response may return full baby profile object?
  baby: Partial<Baby>;
};

const baseUrl = '/babies';

export const babyApi = {
  createBaby: (baby: Partial<Baby>) => {
    return fetchApi<CreateBabyResponse>(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(baby),
    });
  },
};
