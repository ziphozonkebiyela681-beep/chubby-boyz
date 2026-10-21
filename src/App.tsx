import React, { useState, useCallback, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemForCustomization, setSelectedItemForCustomization] = useState<MenuItem | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Quick add to cart (standard default item)
  const handleQuickAddToCart = useCallback((item: MenuItem) => {
    const defaultPrice = item.sizes && item.sizes.length > 0 ? item.sizes[0].price : item.price;
    const defaultSize = item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined;
    const cartItemId = `${item.id}-default`;

    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prevItems.map((i) =>
          i.cartItemId === cartItemId
            ? {
                ...i,
                quantity: i.quantity + 1,
                totalPrice: (i.quantity + 1) * i.unitPrice,
              }
            : i
        );
      } else {
        return [
          ...prevItems,
          {
            cartItemId,
            menuItem: item,
            quantity: 1,
            unitPrice: defaultPrice,
            totalPrice: defaultPrice,
            customization: {
              selectedSize: defaultSize,
            },
          },
        ];
      }
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === item.id ? null : curr));
    }, 1500);
  }, []);

  // Add customized item from modal
  const handleAddCustomizedItem = useCallback((newCartItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((i) => i.cartItemId === newCartItem.cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + newCartItem.quantity,
          totalPrice:
            (updated[existingIndex].quantity + newCartItem.quantity) * updated[existingIndex].unitPrice,
        };
        return updated;
      }
      return [...prevItems, newCartItem];
    });

    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
    } else {
      setCartItems((prev) =>
        prev.map((i) =>
          i.cartItemId === cartItemId
            ? {
                ...i,
                quantity: newQty,
                totalPrice: newQty * i.unitPrice,
              }
            : i
        )
      );
    }
  }, []);

  const handleRemoveItem = useCallback((cartItemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [cartItems]);

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060c1d] text-blue-50 flex flex-col font-sans">
      {/* 1-Row 3-Zone Top Navigation */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreMenu={handleScrollToMenu} />

        {/* Menu Section with Scanned Uber Eats items & Food Photography */}
        <MenuSection
          onSelectItemForCustomization={(item) => setSelectedItemForCustomization(item)}
          onQuickAddToCart={handleQuickAddToCart}
          recentlyAddedId={recentlyAddedId}
        />

        {/* Brand Story & Maboneng Street Culture */}
        <StorySection />

        {/* Physical Location, Google Maps & Live Hours */}
        <LocationHoursSection />

        {/* Verified Reviews & Proof */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        item={selectedItemForCustomization}
        onClose={() => setSelectedItemForCustomization(null)}
        onAddToCart={handleAddCustomizedItem}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
