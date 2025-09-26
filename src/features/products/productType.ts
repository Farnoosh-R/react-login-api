export interface Products {
    id: number;
    title: string;
    price: number;
}
export interface ProductResponse {
    products: Products[]
}