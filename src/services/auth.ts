import { isAxiosError } from 'axios';
import api from './api';

const getAuthToken = async (accessCode: string, password: string) => {
  try {
    const { status, headers } = await api.post('/getToken', null, {
      headers: {
        username: accessCode,
        password: password,
      },
    });

    if (status === 200 && headers.hasAuthorization) {
      return headers['authorization'];
    }
  } catch (err) {
    if (isAxiosError(err)) {
      console.log('error: ', err);
    }
  }
};

export {
  getAuthToken,
};

