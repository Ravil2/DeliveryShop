export interface IProductCardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  categories?: string;
  basePrice: number;
  discountPercent: number;
  rating: number;
  weight?: string;
  volume?: string;
}
