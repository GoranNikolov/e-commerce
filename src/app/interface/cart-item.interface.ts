export interface CartItem {
  id: string;
  name: string;
  images: Array<{
    source: string;
    width: number;
    height: number;
    name: string;
    preview: string;
    focalPoint: any;
  }>;
  qty?: number;
  variant: {
      id: string;
      name: string;
      price: number;
    };
}
