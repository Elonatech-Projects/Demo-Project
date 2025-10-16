export interface ArrayImage {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  _id: string;
}

export interface StarRating {
  stars: string;
  _id: string;
}

export interface NewProduct {
  productImage: string;
  productName: string;
  category: string;
  price: number;
  _id: string;
}

export interface FirstProduct {
  newProduct: NewProduct;
  starImg: StarRating[];
  _id: string;
}

export interface ProductData {
  nameOne: string;
  nameTwo: string;
  brand: string;
  total: number;
  inStock: string;
  shipping: string;
  _id: string;
}

export interface ProductDetails {
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
  _id: string;
}

export interface Product {
  _id: string;
  firstProduct: FirstProduct;
  arrayImg: ArrayImage[]; 
  productData: ProductData[];
  details: ProductDetails;
  __v: number;
}

export interface singleProduct {
  message: string;
  data: Product[];
}