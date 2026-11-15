export interface CategoryNav {
  id: string;
  label: string;
  desc?: string;
}

export interface Product {
  brand: string;
  image: string;
  name: string;
  category: string;
  wattage: string;
  cct: string; // Color Temperature (e.g. 3000K/4000K)
  feature: string;
  mrpRange: string;
}

export interface Project {
  name: string;
  type: string;
  scope: string;
  productsUsed: string;
  image?: string;
  city: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

