import jerseyImg from "./Image/Jersey-2026.jpeg";
import HoodieImg from "./Image/Hoodie.png";
import TopiImg from "./Image/Topi.png";
import MousepadImg from "./Image/Mousepad.png";
import JerseyAwayImg from "./Image/JerseyAway.png";
import PinsetImg from "./Image/Pinset.png";

export const products = [
  {
    id: 1,
    name: "HS PRO JERSEY 2024 - HOME",
    price: 450000,
    image: jerseyImg,
    category: "APPAREL",
    isNew: true
  },
  {
    id: 2,
    name: "HS 'VISION' HOODIE GREY",
    price: 650000,
    image: HoodieImg,
    category: "APPAREL",
    isNew: false
  },
  {
    id: 3,
    name: "HS CLASSIC CAP - NOIR",
    price: 249000,
    image: TopiImg,
    category: "ACCESSORIES",
    isNew: false
  },
  {
    id: 4,
    name: "HS MOUSEPAD XL",
    price: 399000,
    image: MousepadImg,
    category: "EQUIPMENT",
    isNew: true
  },
  {
    id: 5,
    name: "HS JERSEY x High School",
    price: 450000,
    image: JerseyAwayImg,
    category: "APPAREL",
    isNew: false
  },
  {
    id: 6,
    name: "HS PIN SET",
    price: 85000,
    image: PinsetImg,
    category: "ACCESSORIES",
    isNew: false
  }
];

export const categories = ['ALL PRODUCTS', 'APPAREL', 'ACCESSORIES', 'EQUIPMENT', 'LIMITED EDITION'];