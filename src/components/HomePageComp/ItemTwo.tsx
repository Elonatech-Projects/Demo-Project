"use client";

import type React from "react";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios, { isAxiosError } from "axios";
import { ChevronDown, ChevronUp, Upload, ImageIcon, X } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

export const ItemTwo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [odd, setOdd] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("Computer");
  const [images, setImages] = useState<string[]>([]);
  // const [showSpecs, setShowSpecs] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🧩 Computer specs
  type SpecsType = {
    [key: string]: string;
  };

  // const [specs, setSpecs] = useState<SpecsType>({
  //   series: "",
  //   model: "",
  //   weight: "",
  //   dimension: "",
  //   item: "",
  //   color: "",
  //   hardware: "",
  //   os: "",
  //   processor: "",
  //   number: "",
  //   memory: "",
  //   ram: "",
  //   drive: "",
  //   display: "",
  //   resolution: "",
  //   graphics: "",
  //   voltage: "",
  //   battery: "",
  //   wireless: "",
  // });

  const router = useRouter();

  // 🔹 Handle number-only fields
  const handleNumberChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");
      setter(value);
    };
  // http://localhost:5000/api/v2/post
  // 🔹 Handle text fields
  const handleTextChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  // 🔹 Handle specs change
  // const handleSpecsChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setSpecs((prev) => ({ ...prev, [name]: value }));
  // };

  // 🔹 Handle images
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setImages((oldArray) => [...oldArray, reader.result as string]);
        }
      };
    });
  };

  // 🔹 Remove image
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔹 Convert base64 to File
  const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  };

  // 🔹 Submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("odd", odd);
      formData.append("quantity", quantity);
      formData.append("category", category);

      // ✅ IMPORTANT: backend expects an array of computerProperty objects
      // formData.append("computerProperty", JSON.stringify(specs));

      // ✅ Append all image files (as File objects)
      images.forEach((image, index) => {
        const blob = dataURLtoFile(image, `image_${index}.jpg`);
        formData.append("images", blob);
      });

      // 🧩 Debug log to verify keys
      console.log("FormData keys:", Array.from(formData.keys()));
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}: File ->`, value.name, value.size, value.type);
        } else {
          console.log(`${key}:`, value);
        }
      }

      // ✅ Send request
      const response = await axios.post(
        "https://product-api-ru3f.onrender.com/api/v2/post",
        formData
      );
      console.log("✅ Product created:", response.data);
      toast.success("Product created successfully!");
      // http://localhost:5000/api/v2/post
      // https://product-api-q2bi.onrender.com/api/v2/post
      // ✅ Reset form
      setImages([]);
      setName("");
      setDescription("");
      setPrice("");
      setBrand("");
      setOdd("");
      setQuantity("");
      setCategory("Computer");
      // setSpecs({
      //   series: "",
      //   model: "",
      //   weight: "",
      //   dimension: "",
      //   item: "",
      //   color: "",
      //   hardware: "",
      //   os: "",
      //   processor: "",
      //   number: "",
      //   memory: "",
      //   ram: "",
      //   drive: "",
      //   display: "",
      //   resolution: "",
      //   graphics: "",
      //   voltage: "",
      //   battery: "",
      //   wireless: "",
      // });

      router.push("/");
    } catch (error) {
      console.error("❌ Error uploading:", error);
      let err = "An error occurred";
      if (isAxiosError(error)) {
        err = error.response?.data?.message || err;
      }
      toast.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">💻</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Product Editor</h1>
          </div>
          <p className="text-slate-300 text-lg mb-6">
            Create and manage your computer products with ease
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* General Info Section */}
          <div className="p-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-500 rounded"></span>
              General Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter product name"
                  value={name}
                  onChange={handleTextChange(setName)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Brand *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Brand name"
                  value={brand}
                  onChange={handleTextChange(setBrand)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing & Stock Section */}
          <div className="p-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-500 rounded"></span>
              Pricing & Stock
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Price (₦) *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  value={price}
                  onChange={handleNumberChange(setPrice)}
                  placeholder="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Odd (%)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  value={odd}
                  onChange={handleNumberChange(setOdd)}
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Quantity *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  value={quantity}
                  onChange={handleNumberChange(setQuantity)}
                  placeholder="0"
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category
              </label>
              <select
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Computer">Computer</option>
                <option value="Laptop">Laptop</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="p-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-500 rounded"></span>
              Product Images
            </h2>
            <div className="mb-6">
              <label className="block">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-all">
                  <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-slate-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleImage}
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-4">
                  {images.length} image{images.length !== 1 ? "s" : ""} uploaded
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((img, i) => (
                    <div key={i} className="relative group">
                      <Image
                        src={img}
                        alt={`preview-${i}`}
                        unoptimized
                        width={200}
                        height={200}
                        className="w-full h-24 object-cover rounded-lg border border-slate-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Specifications Section */}
          {/* <div className="p-8 border-b border-slate-200">
            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              className="w-full flex items-center justify-between py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-1 h-8 bg-amber-500 rounded"></span>
                Computer Specifications
              </h2>
              {showSpecs ? (
                <ChevronUp className="text-slate-600" />
              ) : (
                <ChevronDown className="text-slate-600" />
              )}
            </button>

            {showSpecs && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Object.keys(specs).map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={specs[key]}
                      onChange={handleSpecsChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                ))}
              </div>
            )}
          </div> */}

          {/* Description Section */}
          <div className="p-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-amber-500 rounded"></span>
              Description
            </h2>
            <textarea
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a detailed product description..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="p-8 bg-slate-50 flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Upload size={20} />
              {isSubmitting ? "Uploading..." : "Upload Product"}
            </button>
            <Link
              href="/shop"
              className="flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
