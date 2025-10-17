
export interface Star {
  _id: string;
  stars: string; // e.g. "⭐"
}

export interface NewProduct {
  _id: string;
  productImage: string;
  productName: string;
  category: string;
  price: number;
}

export interface FirstProduct {
  _id: string;
  newProduct: NewProduct;
  starImg: Star[];
}

export interface ArrayImage {
  _id: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

export interface ProductData {
  _id: string;
  nameOne: string;
  nameTwo: string;
  brand: string;
  total: number;
  inStock: string;
  shipping: string;
}

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

export interface Product {
  _id: string;
  firstProduct: FirstProduct;
  arrayImg: ArrayImage[];
  productData: ProductData[];
  details: ProductDetails;
  __v: number;
}

// Response shape from backend
export interface ProductsResponse {
  message: string;
  data: Product[];
}
