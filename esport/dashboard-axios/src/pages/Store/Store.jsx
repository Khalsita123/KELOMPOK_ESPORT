import { useState } from 'react';
import { ShoppingBag, Search, X, Plus, Minus, Trash2 } from 'lucide-react';
import jerseyImg from "./Image/Jersey-2026.jpeg";

const products = [
  {
    id: 1,
    name: "NOVA PRO JERSEY 2024 - HOME",
    price: 450000,
    priceStr: "Rp 450.000",
    image: jerseyImg,
    category: "APPAREL",
    isNew: true
  },
  {
    id: 2,
    name: "NOVA 'VISION' HOODIE BLACK",
    price: 650000,
    priceStr: "Rp 650.000",
    image: "https://via.placeholder.com/600x800?text=Vision+Hoodie",
    category: "APPAREL",
    isNew: false
  },
  {
    id: 3,
    name: "NOVA CLASSIC CAP - NOIR",
    price: 249000,
    priceStr: "Rp 249.000",
    image: "https://via.placeholder.com/600x800?text=Classic+Cap",
    category: "ACCESSORIES",
    isNew: false
  },
  {
    id: 4,
    name: "NOVA X SPEED MOUSEPAD XL",
    price: 399000,
    priceStr: "Rp 399.000",
    image: "https://via.placeholder.com/600x800?text=Pro+Mousepad",
    category: "EQUIPMENT",
    isNew: true
  },
  {
    id: 5,
    name: "NOVA JERSEY 2024 - AWAY",
    price: 450000,
    priceStr: "Rp 450.000",
    image: "https://via.placeholder.com/600x800?text=Away+Jersey",
    category: "APPAREL",
    isNew: false
  },
  {
    id: 6,
    name: "TEAM NOVA PIN SET",
    price: 850000,
    priceStr: "Rp 85.000",
    image: "https://via.placeholder.com/600x800?text=Pin+Set",
    category: "ACCESSORIES",
    isNew: false
  }
];

const categories = ['ALL PRODUCTS', 'APPAREL', 'ACCESSORIES', 'EQUIPMENT', 'LIMITED EDITION'];

function Store() {
  const [activeCategory, setActiveCategory] = useState('ALL PRODUCTS');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // === FILTERING LOGIC ===
  const filteredProducts = products.filter(p => {
    const matchCategory = activeCategory === 'ALL PRODUCTS' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // === CART LOGIC ===
  const addToCart = (product) => {
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
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <section id="store" className="store-section pb-5 text-white position-relative" style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden', paddingTop: '1rem' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-4">
          <div>
            <h1 className="display-4 fw-bold m-0" style={{ letterSpacing: '-2px' }}>HS STORE</h1>
            <p className="text-secondary fw-bold mb-1 tracking-widest" style={{ fontSize: '0.8rem' }}>OFFICIAL MERCHANDISE</p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            
            {/* Search Input Field (expands when active) */}
            {isSearchActive && (
              <div className="search-input-container">
                <input 
                  type="text" 
                  className="form-control bg-dark text-white border-secondary rounded-0 p-3" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            )}

            <button 
              className="btn btn-dark border-secondary rounded-0 p-3"
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              {isSearchActive ? <X size={20} /> : <Search size={20} />}
            </button>
            
            <button 
              className="btn btn-purple rounded-0 px-4 py-3 d-flex align-items-center gap-2 fw-bold position-relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              <span>CART ({cartItemsCount})</span>
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="categories-filter d-flex gap-4 mb-5 border-bottom border-secondary pb-3 overflow-auto no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-decoration-none fw-bold small pb-3 border-0 bg-transparent ${
                activeCategory === category 
                  ? 'text-white border-bottom border-white' 
                  : 'text-secondary hover-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <div className="product-card h-100 bg-transparent border-0 d-flex flex-column group">
                  <div className="position-relative overflow-hidden mb-3 bg-dark" style={{ aspectRatio: '4/5' }}>
                    {product.isNew && (
                      <span className="position-absolute top-0 start-0 bg-white text-black px-3 py-1 small fw-bold z-3 m-3">
                        NEW
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-100 h-100 object-fit-cover transition-all duration-500 hover-zoom"
                    />
                    
                    {/* Add to cart overlay button on hover */}
                    <div className="position-absolute bottom-0 start-0 w-100 p-3 opacity-0 transition-all duration-300 add-to-cart-overlay">
                      <button 
                        className="btn btn-white w-100 rounded-0 fw-bold py-2 bg-white text-black hover-purple"
                        onClick={() => addToCart(product)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="px-1 d-flex flex-column flex-grow-1">
                    <p className="text-secondary small mb-1 fw-bold">{product.category}</p>
                    <h5 className="fw-bold mb-2 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>{product.name}</h5>
                    <p className="mb-0 text-white fw-bold opacity-75 mt-auto">{product.priceStr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h4 className="text-secondary">No products found.</h4>
            <p className="text-secondary">Try a different category or search term.</p>
          </div>
        )}
      </div>

      {/* === SHOPPING CART SIDEBAR === */}
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50 z-40"
          style={{ zIndex: 1040 }}
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      {/* Sidebar Content */}
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-dark z-50 text-white transition-transform duration-300 d-flex flex-column`}
        style={{ 
          width: '100%', 
          maxWidth: '400px', 
          transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1050,
          borderLeft: '1px solid #333'
        }}
      >
        <div className="p-4 border-bottom border-secondary d-flex justify-content-between align-items-center bg-black">
          <h4 className="m-0 fw-bold tracking-widest">YOUR CART ({cartItemsCount})</h4>
          <button className="btn btn-link text-white p-0 border-0" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow-1 overflow-auto p-4 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="text-center text-secondary mt-5">
              <ShoppingBag size={48} className="mb-3 opacity-50" />
              <h5>Your cart is empty</h5>
              <button className="btn btn-outline-light rounded-0 mt-3" onClick={() => setIsCartOpen(false)}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {cart.map(item => (
                <div key={item.id} className="d-flex gap-3">
                  <div className="bg-secondary bg-opacity-25" style={{ width: '80px', height: '100px' }}>
                    <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="d-flex flex-column flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h6 className="fw-bold m-0 small w-75">{item.name}</h6>
                      <button className="btn btn-link text-secondary p-0 hover-white" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-secondary small mb-2">{item.priceStr}</p>
                    
                    <div className="mt-auto d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center border border-secondary">
                        <button className="btn btn-link text-white p-1 text-decoration-none" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="px-2 small fw-bold">{item.quantity}</span>
                        <button className="btn btn-link text-white p-1 text-decoration-none" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="fw-bold ms-auto">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 bg-black border-top border-secondary">
            <div className="d-flex justify-content-between mb-3">
              <span className="text-secondary fw-bold">SUBTOTAL</span>
              <span className="fw-bold fs-5">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-secondary small mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="btn btn-purple w-100 rounded-0 py-3 fw-bold tracking-widest text-white">
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>

      <style>{`
        .btn-purple {
          background-color: #e31837; /* Menggunakan merah Valorant/Team Secret */
          color: white;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-purple:hover {
          background-color: #ff2a4b;
          color: white;
        }
        .hover-purple:hover {
          background-color: #e31837 !important;
          color: white !important;
          border-color: #e31837 !important;
        }
        .tracking-widest {
          letter-spacing: 0.2em;
        }
        .hover-white:hover {
          color: white !important;
        }
        
        /* Product Card Hover Effects */
        .product-card:hover .hover-zoom {
          transform: scale(1.05);
        }
        .product-card:hover .add-to-cart-overlay {
          opacity: 1 !important;
        }
        
        /* Input Search animation */
        .search-input-container {
          animation: slideLeft 0.3s ease forwards;
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); width: 0; }
          to { opacity: 1; transform: translateX(0); width: 250px; }
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Custom scrollbar for cart */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}

export default Store;
