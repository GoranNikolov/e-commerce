export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Asset {
  id: string;
  source: string;
  type: string;
  width: number;
  height: number;
  name: string;
  preview: string;
  focalPoint: any;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  variants: ProductVariant[];
  assets: Asset[];
}

export interface GraphQLResponse {
  product?: Product;
}
