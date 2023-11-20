export interface CartItem {
  id: string;
  name: string;
  images: Array<{
    source: string;
    width: number;
    height: number;
    name: string;
    preview: string;
    focalPoint: any; // You can replace 'any' with the actual type if needed
  }>;
  qty?: number;
  variant: {
      id: string;
      name: string;
      price: number;
    };
  // ... other properties
}
