import { ProductDetail } from '../modules/shared/types/products.types';

export function getProductDetail(
  name: string = 'product1',
  id: string
): ProductDetail {
  return {
    id: id,
    name: name,
    categoryName: 'an interesting category',
    price: 999,
    description: 'au motoare zburatoare',
  };
}

export function getProductsDetail(howMany: number): ProductDetail[] {
  const productsDetail = [];
  for (let i = 0; i < howMany; i++)
    productsDetail.push(getProductDetail(`product_${i}`, `${i}`));
  return productsDetail;
}
