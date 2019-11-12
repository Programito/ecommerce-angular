import { Categoria } from './categoria.model';
import { Product } from './product.model';

export class Cart {
    constructor(
        public products: ProductPrecio,
        public total: number
    ) {}
    }

export class ProductPrecio {
    constructor(
        public product: Product,
        public cantidad: number,
        public precio: number,
        public borrar: number
    ) {}
}
