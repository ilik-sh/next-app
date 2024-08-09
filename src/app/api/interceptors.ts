import axios, { type CreateAxiosDefaults } from 'axios';

import { errorCatch } from './errors';

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
  withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      throw error;
    }

    if (originalRequest._isRetry) {
      throw error;
    }

    const errorMessage = errorCatch(error);

    if (
      error?.response?.status === '401' ||
      errorMessage === 'jwt expired' ||
      errorMessage === 'jwt must be provided'
    ) {
      originalRequest._isRetry = true;
      try {
        return axiosWithAuth(originalRequest);
      } catch (error) {}
    }

    throw error;
  },
);
