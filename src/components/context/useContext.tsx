"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ProductsResponse, Product } from "@/data/element/products";
import axios, { isAxiosError } from "axios";
import { toast } from "react-hot-toast";

// ================= CONTEXT INTERFACE =================
interface TypeContextProps {
  products: Product[];       // Always an array for easier rendering
  isLoading: boolean;
}

// ================= CREATE CONTEXT =================
const TypeContext = createContext<TypeContextProps | undefined>(undefined);

// ================= PROVIDER COMPONENT =================
export function UseContextApp({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get<ProductsResponse>(
        "http://localhost:5000/api/v1/getProducts"
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

  return (
    <TypeContext.Provider value={{ products, isLoading}}>
      {children}
    </TypeContext.Provider>
  );
}

// ================= CUSTOM HOOK =================
export function useType() {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useType must be used within a UseContextApp provider");
  }
  return context;
}