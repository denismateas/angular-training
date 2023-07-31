import { ShoppingCartDetail } from '../modules/shared/types/shopping-cart.types';
export function getShoppingCartDetail(
  name: string = 'product1'
): ShoppingCartDetail {
  return {
    name: name,
    category: 'an interesting category',
    price: 999,
    description: 'au motoare zburatoare',
    quantity: 5,
  };
}

export function getShoppingCartDetails(howMany: number): ShoppingCartDetail[] {
  const productsDetail = [];
  for (let i = 0; i < howMany; i++)
    productsDetail.push(getShoppingCartDetail(`product_${i}`));
  return productsDetail;
}
