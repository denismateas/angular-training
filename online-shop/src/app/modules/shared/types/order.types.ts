import { Address } from './address.types';

export interface Order {
  createdAt: string;
  address: Address;
  productList: Map<string, number>;
}
