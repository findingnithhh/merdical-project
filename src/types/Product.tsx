export interface IProduct {
  id: number;
  category: string;
  productName: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: string | null;
  imageUrl: string;
}
