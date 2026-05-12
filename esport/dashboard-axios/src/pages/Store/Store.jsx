import { ShoppingBag, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "NOVA PRO JERSEY 2024 - HOME",
    price: "Rp 450.000",
    image: "https://via.placeholder.com/600x800?text=Pro+Jersey+Home",
    category: "APPAREL",
    isNew: true
  },
  {
    id: 2,
    name: "NOVA 'VISION' HOODIE BLACK",
    price: "Rp 650.000",
    image: "https://via.placeholder.com/600x800?text=Vision+Hoodie",
    category: "APPAREL",
    isNew: false
  },
  {
    id: 3,
    name: "NOVA CLASSIC CAP - NOIR",
    price: "Rp 249.000",
    image: "https://via.placeholder.com/600x800?text=Classic+Cap",
    category: "ACCESSORIES",
    isNew: false
  },
  {
    id: 4,
    name: "NOVA X SPEED MOUSEPAD XL",
    price: "Rp 399.000",
    image: "https://via.placeholder.com/600x800?text=Pro+Mousepad",
    category: "EQUIPMENT",
    isNew: true
  },
  {
    id: 5,
    name: "NOVA JERSEY 2024 - AWAY",
    price: "Rp 450.000",
    image: "https://via.placeholder.com/600x800?text=Away+Jersey",
    category: "APPAREL",
    isNew: false
  },
  {
    id: 6,
    name: "TEAM NOVA PIN SET",
    price: "Rp 85.000",
    image: "https://via.placeholder.com/600x800?text=Pin+Set",
    category: "ACCESSORIES",
    isNew: false
  }
];

function Store() {
  return (
    <section id="store" className="store-section py-5 text-white" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-4">
          <div>
            <p className="text-secondary fw-bold mb-1 tracking-widest" style={{ fontSize: '0.8rem' }}>OFFICIAL MERCHANDISE</p>
            <h1 className="display-3 fw-bold m-0" style={{ letterSpacing: '-2px' }}>NOVA SHOP</h1>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark border-secondary rounded-0 p-3">
              <Search size={20} />
            </button>
            <button className="btn btn-purple rounded-0 px-4 py-3 d-flex align-items-center gap-2 fw-bold">
              <ShoppingBag size={20} />
              <span>CART (0)</span>
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="categories-filter d-flex gap-4 mb-5 border-bottom border-secondary pb-3 overflow-auto no-scrollbar">
          <a href="#" className="text-decoration-none text-white fw-bold small border-bottom border-white pb-3">ALL PRODUCTS</a>
          <a href="#" className="text-decoration-none text-secondary fw-bold small pb-3 hover-white">APPAREL</a>
          <a href="#" className="text-decoration-none text-secondary fw-bold small pb-3 hover-white">ACCESSORIES</a>
          <a href="#" className="text-decoration-none text-secondary fw-bold small pb-3 hover-white">EQUIPMENT</a>
          <a href="#" className="text-decoration-none text-secondary fw-bold small pb-3 hover-white">LIMITED EDITION</a>
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-4">
              <div className="product-card h-100 bg-transparent border-0" style={{ cursor: 'pointer' }}>
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
                </div>
                <div className="px-1">
                  <p className="text-secondary small mb-1 fw-bold">{product.category}</p>
                  <h5 className="fw-bold mb-2 text-uppercase" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>{product.name}</h5>
                  <p className="mb-0 text-white fw-bold opacity-75">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .btn-purple {
          background-color: #7b2cbf;
          color: white;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-purple:hover {
          background-color: #9d4edd;
          color: white;
          transform: translateY(-2px);
        }
        .tracking-widest {
          letter-spacing: 0.3em;
        }
        .hover-white:hover {
          color: white !important;
        }
        .hover-zoom:hover {
          transform: scale(1.05);
          filter: brightness(0.8);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default Store;
