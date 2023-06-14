import { ProductsFetchResponse } from '@/types/products';
import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query: ` query{
    allProducts{
      id
      name
      price_in_cents
      image_url
    }
  }
  `,
  });
};

export default function useProducts() {
  const { data } = useQuery({
    queryFn: fetch,
    queryKey: ['products'],
  });
  return {
    data: data?.data.data.allProducts,
  };
}