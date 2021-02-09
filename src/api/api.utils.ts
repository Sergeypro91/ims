import { APIResponse } from './api.types';

export const isResponseSuccessful = (response: APIResponse): boolean => {
    if (response.data.code === 0) return true;
    return false;
};
