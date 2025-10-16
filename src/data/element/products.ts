// ==================== PRODUCT TYPES ====================

// Individual star rating
export interface Star {
  _id: string;
  stars: string; // e.g. "⭐"
}

// The new product object
export interface NewProduct {
  _id: string;
  productImage: string;
  productName: string;
  category: string;
  price: number;
}

// Combines product and its stars
export interface FirstProduct {
  _id: string;
  newProduct: NewProduct;
  starImg: Star[];
}

// Images array (each product has one element in this array)
export interface ArrayImage {
  _id: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

// ProductData array (contains brand, stock, etc.)
export interface ProductData {
  _id: string;
  nameOne: string;
  nameTwo: string;
  brand: string;
  total: number;
  inStock: string;
  shipping: string;
}

// Product details object
export interface ProductDetails {
  _id: string;
  inch: string;
  desc: string;
  descOne: string;
  descTwo: string;
  descThree: string;
  descFour: string;
  text: string;
  textOne: string;
  textTwo: string;
  headTag: string;
  statement: string;
  statementOne: string;
}

// The main Product document from MongoDB
export interface Product {
  _id: string;
  firstProduct: FirstProduct;
  arrayImg: ArrayImage[];
  productData: ProductData[];
  details: ProductDetails;
  __v: number;
}

// ==================== RESPONSE TYPES ====================

// Response shape from backend
export interface ProductsResponse {
  message: string;
  data: Product[];
}
