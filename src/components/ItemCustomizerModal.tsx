import React, { useState } from 'react';
import { X, Plus, Minus, Check, Flame } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<{ label: string; price: number } | undefined>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined
  );
  const [selectedAddons, setSelectedAddons] = useState<{ name: string; price: number }[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Toggle addon checkbox
  const toggleAddon = (addon: { name: string; price: number }) => {
    if (selectedAddons.some((a) => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter((a) => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Base item price calculation
  const basePrice = selectedSize ? selectedSize.price : item.price;
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = basePrice + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const cartItemId = `${item.id}-${selectedSize?.label || 'default'}-${selectedAddons
      .map((a) => a.name)
      .sort()
      .join(',')}-${Date.now()}`;

    const newCartItem: CartItem = {
      cartItemId,
      menuItem: item,
      quantity,
      unitPrice,
      totalPrice,
      customization: {
        selectedSize,
        selectedAddons,
        specialInstructions: specialInstructions.trim() || undefined,
      },
    };

    onAddToCart(newCartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-[#0b1736] border-2 border-blue-700/50 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Image */}
        {item.image && (
          <div className="relative h-48 w-full bg-blue-950">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1736] via-[#0b1736]/30 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 p-2 rounded-full bg-blue-950/80 text-blue-200 hover:text-white border border-blue-600/40 backdrop-blur-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {!item.image && (
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1 rounded text-blue-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-funky text-white">{item.name}</h3>
              <p className="mt-1 text-xs text-blue-200/80 leading-relaxed font-medium">{item.description}</p>
            </div>
            {item.spiceLevel && item.spiceLevel !== 'None' && (
              <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                <Flame className="w-3.5 h-3.5" />
                <span>{item.spiceLevel}</span>
              </div>
            )}
          </div>

          {/* Size Options if available */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mt-6">
              <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">
                Choose Portion Size
              </label>
              <div className="space-y-2">
                {item.sizes.map((size) => {
                  const isSelected = selectedSize?.label === size.label;
                  return (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400/15 text-white shadow-sm'
                          : 'border-blue-800/40 bg-blue-950/60 text-blue-200 hover:bg-blue-900/60'
                      }`}
                    >
                      <span>{size.label}</span>
                      <span className="font-mono-nums font-black text-amber-400">
                        R {size.price.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-ons & Extras */}
          {item.availableAddons && item.availableAddons.length > 0 && (
            <div className="mt-6">
              <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">
                Add Extras &amp; Toppings
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {item.availableAddons.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.name === addon.name);
                  return (
                    <button
                      key={addon.name}
                      type="button"
                      onClick={() => toggleAddon(addon)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition-colors ${
                        isChecked
                          ? 'border-amber-400 bg-amber-400/15 text-white'
                          : 'border-blue-800/40 bg-blue-950/50 text-blue-200 hover:bg-blue-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-stone-950 font-bold'
                              : 'border-blue-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono-nums font-bold text-amber-400">
                        +R {addon.price.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="mt-5">
            <label
              htmlFor="special-instructions"
              className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1.5"
            >
              Kitchen Notes (Optional)
            </label>
            <input
              id="special-instructions"
              type="text"
              placeholder="e.g. Extra sauce on side, extra crispy slap chips..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-blue-950 border border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Quantity and Final Add CTA */}
          <div className="mt-6 pt-5 border-t border-blue-900/50 flex items-center justify-between gap-4">
            <div className="flex items-center border border-blue-700/50 rounded-xl bg-blue-950">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="p-2 text-blue-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-xs font-bold font-mono-nums text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-blue-300 hover:text-white"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-3.5 px-4 text-xs font-funky uppercase tracking-wider rounded-xl flex items-center justify-between btn-3d-gold shadow-lg"
            >
              <span>Add to Bag</span>
              <span className="font-mono-nums font-black text-sm">R {totalPrice.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
