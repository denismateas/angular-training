import { ProductDetail } from '../modules/shared/types/products.types';

export function getProductDetail(name: string = 'product1'): ProductDetail {
  return {
    id: 2,
    name: name,
    category: 'an interesting category',
    price: 999,
    description: 'au motoare zburatoare',
  };
}

export function getProductsDetail(howMany: number): ProductDetail[] {
  const productsDetail = [];
  for (let i = 0; i < howMany; i++)
    productsDetail.push(getProductDetail(`product_${i}`));
  return productsDetail;
}
