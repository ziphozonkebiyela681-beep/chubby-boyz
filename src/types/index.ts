export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'kotas' | 'chips' | 'wings' | 'combos' | 'gatsby' | 'drinks' | 'dips';
  categoryLabel: string;
  price: number;
  description: string;
  image?: string;
  isPopular?: boolean;
  spiceLevel?: 'None' | 'Mild' | 'Spicy' | 'Fiery';
  tags: string[];
  sizes?: { label: string; price: number }[];
  availableAddons?: { name: string; price: number }[];
}

export interface CartCustomization {
  selectedSize?: { label: string; price: number };
  selectedAddons?: { name: string; price: number }[];
  specialInstructions?: string;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  customization?: CartCustomization;
}

export interface StoreStatus {
  isOpen: boolean;
  message: string;
  hoursToday: string;
}
