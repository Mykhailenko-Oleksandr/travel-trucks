import { Gallery } from "./gallery";
import { Review } from "./review";

export interface Truck {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Gallery[];
  reviews: Review[];
}

export interface FormDataFilter {
  location?: string;
  ac?: string;
  transmission?: string;
  kitchen?: string;
  tv?: string;
  bathroom?: string;
  form?: string;
}
