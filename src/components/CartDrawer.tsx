import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ExternalLink, ArrowRight, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO, BRAND_LOGO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'pickup-details' | 'confirmed'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupNote, setPickupNote] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const packagingFee = 0; // Free takeaway packaging
  const orderTotal = subtotal + packagingFee;

  // Generate WhatsApp Order String
  const generateWhatsAppOrder = () => {
    let message = `*NEW ORDER FOR CHUBBY BOYZ MABONENG (289 Fox St)*\n\n`;
    if (customerName) message += `*Customer:* ${customerName}\n`;
    if (customerPhone) message += `*Contact:* ${customerPhone}\n\n`;
    message += `*Order Items:*\n`;

    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. ${item.quantity}x ${item.menuItem.name}`;
      if (item.customization?.selectedSize) {
        message += ` (${item.customization.selectedSize.label})`;
      }
      message += ` - R ${item.totalPrice.toFixed(2)}\n`;

      if (item.customization?.selectedAddons && item.customization.selectedAddons.length > 0) {
        message += `   + Extras: ${item.customization.selectedAddons.map((a) => a.name).join(', ')}\n`;
      }
      if (item.customization?.specialInstructions) {
        message += `   Note: "${item.customization.specialInstructions}"\n`;
      }
    });

    message += `\n*TOTAL: R ${orderTotal.toFixed(2)}*\n`;
    message += `Pickup at: 289 Fox Street, Maboneng Lifestyle Centre`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleConfirmPickup = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = `CHUB-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(orderNum);
    setCheckoutStep('confirmed');
  };

  const resetAll = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end">
      <div
        className="w-full max-w-md bg-[#081226] h-full flex flex-col border-l-2 border-blue-700/50 shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-blue-900/50 flex items-center justify-between bg-blue-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 filter drop-shadow-[0_2px_6px_rgba(245,158,11,0.4)] shrink-0">
              <img
                src={BRAND_LOGO}
                alt="Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-funky text-white">Your Street Food Bag</h3>
              <span className="text-xs text-amber-400 font-mono-nums font-bold">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items selected
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 rounded-lg text-blue-300 hover:text-white hover:bg-blue-900/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CART ITEMS */}
        {checkoutStep === 'cart' && (
          <>
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-base font-bold text-white">Your bag is empty</h4>
                <p className="mt-1 text-xs text-blue-200/70 max-w-xs">
                  Craving smash burgers, loaded kotas, or babalaaz slap chips? Add some fresh bites from the menu.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-4 rounded-2xl bg-blue-950/70 border border-blue-800/40 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      {item.menuItem.image && (
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-blue-900 shrink-0 border border-blue-700/40">
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display truncate">
                            {item.menuItem.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartItemId)}
                            aria-label={`Remove ${item.menuItem.name}`}
                            className="text-blue-400 hover:text-red-400 p-0.5 shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.customization?.selectedSize && (
                          <div className="text-[11px] text-amber-400">
                            Size: {item.customization.selectedSize.label}
                          </div>
                        )}
                        {item.customization?.selectedAddons &&
                          item.customization.selectedAddons.length > 0 && (
                            <div className="text-[10px] text-blue-200/80 mt-0.5 line-clamp-1">
                              +{item.customization.selectedAddons.map((a) => a.name).join(', ')}
                            </div>
                          )}
                        {item.customization?.specialInstructions && (
                          <div className="text-[10px] text-blue-300/60 italic">
                            "{item.customization.specialInstructions}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-blue-900/40">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-blue-700/50 rounded-xl bg-blue-950">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 text-blue-300 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold font-mono-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 text-blue-300 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-sm font-black font-mono-nums text-amber-400">
                        R {item.totalPrice.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Checkout Actions */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-blue-900/50 bg-[#060c1d] space-y-4">
                <div className="space-y-1.5 text-xs text-blue-200/80">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-mono-nums text-white font-semibold">
                      R {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Takeaway Box &amp; Packaging</span>
                    <span className="text-emerald-400 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-blue-900/50">
                    <span>Order Total</span>
                    <span className="font-mono-nums text-amber-400 text-lg">
                      R {orderTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Direct Uber Eats vs In-Store Pickup */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('pickup-details')}
                    className="w-full py-3.5 px-4 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Proceed to Pickup at 289 Fox St</span>
                    <ArrowRight className="w-4 h-4 text-stone-950 stroke-[3]" />
                  </button>

                  <a
                    href={STORE_INFO.uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-950 border border-blue-700/50 hover:bg-blue-900 transition-colors rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Prefer Delivery? Order on Uber Eats</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>
              </div>
            )}
          </>
        )}

        {/* STEP 2: PICKUP DETAILS */}
        {checkoutStep === 'pickup-details' && (
          <form onSubmit={handleConfirmPickup} className="flex-1 flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="text-xs text-amber-400 hover:underline mb-2 inline-block font-semibold"
                >
                  &larr; Back to Bag
                </button>
                <h4 className="text-lg font-black text-white font-display">
                  Local Pickup Details
                </h4>
                <p className="text-xs text-blue-200/80 mt-1">
                  Pick up fresh at Chubby Boyz counter, 289 Fox Street, Maboneng Lifestyle Centre.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sipho Sithole"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-blue-950 border border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  South African Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 082 123 4567"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-blue-950 border border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  Estimated Pickup Window
                </label>
                <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center gap-3 text-xs text-blue-100">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Ready in 15–20 minutes after confirmation</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  Pickup Note / Car Color (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Walking from Fox St market, parking outside..."
                  value={pickupNote}
                  onChange={(e) => setPickupNote(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-blue-950 border border-blue-800 rounded-xl text-white placeholder-blue-400/40 focus:outline-none focus:border-amber-400 resize-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-blue-900/50 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Confirm Pickup Order · R {orderTotal.toFixed(2)}</span>
              </button>

              <button
                type="button"
                onClick={generateWhatsAppOrder}
                className="w-full py-3 px-4 text-xs font-funky uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border-2 border-emerald-500/40 hover:bg-emerald-900/60 transition-colors rounded-xl flex items-center justify-center gap-2"
              >
                <span>Or Send Order via WhatsApp (+27 11 028 9289)</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER CONFIRMED TICKET */}
        {checkoutStep === 'confirmed' && (
          <div className="flex-1 flex flex-col justify-between p-6 text-center">
            <div className="space-y-4 my-auto">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h4 className="text-3xl font-funky text-white">
                Order Received!
              </h4>

              <div className="p-5 rounded-2xl bg-blue-950/80 border-2 border-amber-400/50 text-center space-y-2 shadow-lg">
                <div className="text-[11px] font-funky text-blue-300 uppercase tracking-widest">
                  Pickup Order Ticket
                </div>
                <div className="text-3xl font-funky text-amber-400 font-mono-nums">
                  #{confirmedOrderId}
                </div>
                <div className="text-xs text-blue-200">
                  Customer: <span className="text-white font-bold">{customerName || 'Guest'}</span>
                </div>
              </div>

              <div className="text-xs text-blue-200/80 space-y-2.5 text-left bg-blue-950/40 p-4.5 rounded-2xl border border-blue-800/40">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Pickup Location:</span>
                    <p className="text-blue-100">289 Fox Street, Maboneng Lifestyle Centre, Johannesburg</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-blue-900/40">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Estimated Ready Time:</span>
                    <p className="text-blue-100">15–20 minutes (Pay cash or card on collection)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-6 border-t border-blue-900/50">
              <button
                type="button"
                onClick={resetAll}
                className="w-full py-3 px-4 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 rounded-xl transition-colors"
              >
                Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
