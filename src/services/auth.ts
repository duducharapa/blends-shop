import api from './api';
import { ResponseData } from '../interfaces/Requests';
import { isAxiosError } from 'axios';

const getAuthToken = async (accessCode: string, password: string): Promise<ResponseData<void>> => {
  const credentials = {
    username: accessCode,
    password,
  };

  try {
    const { status, headers } = await api.post('/login', null, {
      headers: { ...credentials },
    });

    const requestData: ResponseData<void> = {
      authToken: headers['authorization'],
      status,
    };

    return requestData;
  } catch (err) {
    if (isAxiosError(err)) {
      const requestData: ResponseData<void> = {
        status: err.response?.status || 500,
      };

      return requestData;
    }
  }

  return {
    status: 500,
  };
};

export {
  getAuthToken,
};

