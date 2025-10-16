"use client";

import Image from "next/image";
import { useType } from "../context/useContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export function Product() {
  const { products, isLoading, selectedProduct } = useType();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!products.length) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
   <div className="mt-12">
    <h1 className="text-center text-sm text-black font-bold lg:text-3xl">
        Latest Products
      </h1>
      <div className="bg-[#dc3545] w-[60px] h-[2px] mx-auto"></div>
     <div className="grid grid-cols-2 gap-2 mt-10 w-[95%] m-auto lg:grid-cols-3 xl:grid-cols-6 xl:w-[99%]">
      {products.map((el) => (
        <Card
          key={el._id}
          className="
           min-h-[285px] p-1
            border border-gray-300 
            rounded-lg shadow-sm bg-white 
          "
        >
          <CardHeader className="p-0">
            <Image
              src={el.firstProduct.newProduct.productImage}
              alt={el.firstProduct.newProduct.productName}
              height={160}
              width={160}
              className="w-full h-36  object-cover"
            />
          </CardHeader>

          <CardContent className=" ">
            <CardTitle className="text-sm font-semibold text-black truncate md:text-2xl">
              {el.firstProduct.newProduct.productName}
            </CardTitle>
            <CardDescription className="text-black text-xs mt-1">
              {el.firstProduct.newProduct.category}
            </CardDescription>
            <CardDescription className="text-gray-600 text-xs mt-1">
              {/* ₦{el.firstProduct.newProduct.price.toLocaleString()} */}
              ⭐ ⭐ ⭐ ⭐
            </CardDescription>
            <CardDescription className="text-gray-600 text-xs mt-1 flex justify-between">
              ₦{el.firstProduct.newProduct.price.toLocaleString()}
              <ShoppingCart />
            </CardDescription>
          </CardContent>

          <CardFooter className="p-2 flex justify-center w-[95%] h-7 text-white font-bold text-xs rounded-full bg-[#212529]">
            <button onClick={()=> selectedProduct(el)}>View more</button>
          </CardFooter>
        </Card>
      ))}
    </div>
   </div>
  );
}
