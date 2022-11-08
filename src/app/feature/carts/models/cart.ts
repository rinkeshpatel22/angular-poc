import { Product } from './product';

export interface Cart {
    id: number;
    products: Product[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    image?: string,


}

export interface CartResponse {
    carts: Cart[],
    total: number,
    skip: number,
    limit: number
}
