"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ProductsResponse, Product } from "@/data/element/products";
import axios, { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface TypeContextProps {
  products: Product[];
  isLoading: boolean;
  selectedProduct: (product: Product) => void;
  item: Product | null;
}

const TypeContext = createContext<TypeContextProps | undefined>(undefined);

export function UseContextApp({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState<Product | null>(null);
  const useNavigate = useRouter();

  const getResponse = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<ProductsResponse>(
        "https://product-api-ru3f.onrender.com/api/v1/getProducts"
      );
      setProducts(res.data.data || []);
      console.log("✅ Products fetched:", res.data.data);
    } catch (error) {
      console.error("❌ Fetch error:", error);
      let err = "A network error has occurred";
      if (isAxiosError(error)) {
        err = error.response?.data?.message || err;
      }
      toast.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  const selectedProduct = (product: Product) => {
    if (!product) {
      toast.error("No product found");
    }
    setItem(product);
    useNavigate.push('/product');
  };

  return (
    <TypeContext.Provider
      value={{ products, isLoading, selectedProduct, item }}
    >
      {children}
    </TypeContext.Provider>
  );
}

export function useType() {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useType must be used within a UseContextApp provider");
  }
  return context;
}
