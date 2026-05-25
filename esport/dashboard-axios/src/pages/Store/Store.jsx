import { useState, useEffect, useMemo, useCallback } from 'react';
import { ShoppingBag, Search, X, Plus, Minus, Trash2 } from 'lucide-react';
import { products, categories } from './produkData'; 

const formatPrice = (price) => `Rp ${price.toLocaleString('id-ID')}`;

function Store() {
  const [activeCategory, setActiveCategory] = useState('ALL PRODUCTS');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('hs_store_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('hs_store_cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = activeCategory === 'ALL PRODUCTS' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const cartTotal = useMemo(() => 
    cart.reduce((total, item) => total + (item.price * item.quantity), 0), 
  [cart]);

  const cartItemsCount = useMemo(() => 
    cart.reduce((count, item) => count + item.quantity, 0), 
  [cart]);

  return (
    <section id="store" className="pb-12 pt-4 text-white relative bg-[#050505] min-h-screen overflow-x-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div className="text-left"> 
            <h1 className="text-5xl font-bold m-0 tracking-[-2px] -translate-x-[5px]">
              HS STORE
            </h1>
            <p className="text-gray-400 font-bold mb-1 tracking-[0.2em] text-[0.8rem] translate-x-0">
              OFFICIAL MERCHANDISE
            </p>
          </div>
          
          <div className="flex gap-2 items-center">
            {isSearchActive && (
              <div className="animate-[slideLeft_0.3s_ease_forwards] overflow-hidden">
                <input 
                  type="text" 
                  className="bg-[#1a1a1a] text-white border border-[#333] outline-none focus:border-gray-500 rounded-none p-3 w-full" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            )}

            <button 
              className="bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-none p-3 text-white transition-colors flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (isSearchActive) {
                  setSearchQuery('');
                }
                setIsSearchActive(!isSearchActive);
              }}
            >
              {isSearchActive ? <X size={20} /> : <Search size={20} />}
            </button>
            
            <button 
              className="bg-[#e31837] hover:bg-[#ff2a4b] text-white transition-colors duration-300 rounded-none px-6 py-3 flex items-center gap-2 font-bold relative border-none cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              <span>CART ({cartItemsCount})</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6 mb-12 border-b border-[#333] pb-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`no-underline font-bold text-sm pb-3 border-0 bg-transparent whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === category 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="h-full bg-transparent border-0 flex flex-col group product-card cursor-pointer">
                <div className="relative overflow-hidden mb-3 bg-[#111] aspect-[4/5]">
                  {product.isNew && (
                    <span className="absolute top-0 left-0 bg-white text-black px-3 py-1 text-xs font-bold z-10 m-4 pointer-events-none">
                      NEW
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="cart-overlay absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto flex justify-center">
                    <button 
                      className="w-[85%] rounded-none font-bold py-2 text-sm bg-[#e31837] text-white hover:bg-[#ff2a4b] transition-colors duration-300 border-none cursor-pointer pointer-events-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

                <div className="px-2 pt-2 flex flex-col flex-grow">
                  <p className="text-gray-400 text-[11px] mb-1 font-bold tracking-widest">{product.category}</p>
                  <h5 className="font-bold mb-1.5 uppercase text-sm md:text-base leading-tight tracking-[0.5px] text-gray-100">{product.name}</h5>
                  <p className="text-white font-semibold text-sm opacity-90">{formatPrice(product.price)}</p>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h4 className="text-gray-400 text-xl">No products found.</h4>
            <p className="text-gray-500 mt-2">Try a different category or search term.</p>
          </div>
        )}
      </div>

      {isCartOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1040]"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      <div 
        className={`fixed top-0 right-0 h-full bg-[#0a0a0a] text-white transition-transform duration-300 flex flex-col z-[1050] w-full max-w-[400px] border-l border-[#333] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#333] flex justify-between items-center bg-black">
          <h4 className="m-0 font-bold tracking-[0.2em] text-lg">YOUR CART ({cartItemsCount})</h4>
          <button className="text-white bg-transparent border-0 p-0 hover:text-gray-400 transition-colors cursor-pointer" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-[#111] [&::-webkit-scrollbar-thumb]:bg-[#333] [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-[#555]">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-12 flex flex-col items-center">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <h5 className="text-lg font-medium text-gray-400">Your cart is empty</h5>
              <button 
                className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-none mt-6 px-6 py-2 text-sm font-bold tracking-wider cursor-pointer" 
                onClick={() => setIsCartOpen(false)}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="bg-[#111] shrink-0 w-[80px] h-[100px]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start">
                      <h6 className="font-bold m-0 text-sm w-3/4">{item.name}</h6>
                      <button className="text-gray-500 hover:text-white bg-transparent border-0 p-0 transition-colors cursor-pointer" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-2 mt-1">{formatPrice(item.price)}</p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center border border-[#333]">
                        <button className="text-white p-1.5 bg-transparent hover:bg-[#222] transition-colors border-0 cursor-pointer" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-bold">{item.quantity}</span>
                        <button className="text-white p-1.5 bg-transparent hover:bg-[#222] transition-colors border-0 cursor-pointer" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-bold ml-auto text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-black border-t border-[#333]">
            <div className="flex justify-between mb-2 mt-2">
              <span className="text-gray-400 font-bold text-sm">SUBTOTAL</span>
              <span className="font-bold text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-gray-500 text-xs mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="bg-[#e31837] hover:bg-[#ff2a4b] w-full rounded-none py-4 font-bold tracking-[0.2em] text-white transition-colors duration-300 border-none cursor-pointer">
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); width: 0; }
          to { opacity: 1; transform: translateX(0); width: 250px; }
        }
        
        /* Fallback khusus untuk memastikan hover tombol berjalan 100% pada semua lingkungan */
        .product-card:hover .cart-overlay {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  );
}

export default Store;