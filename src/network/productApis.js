import { axiosInstance } from './axiosConfig';

export const geProductDetails = (id) => {
  return axiosInstance.get(`/${id}`);
};

export const getProduct = () => {
  return axiosInstance.get(`/`);
};
