import { Categoria } from './categoria.model';

export class Product {
    constructor(
        public nombre: string,
        public categoria: Categoria,
        public p: number,
        public cantidad: number,
        public oferta?: Oferta,
        public promocion?: any,
        public i?: string,
        public _id?: string,
    ) {}
}

export class Oferta {
    constructor(
        public descuento: number
    ) {}
}
