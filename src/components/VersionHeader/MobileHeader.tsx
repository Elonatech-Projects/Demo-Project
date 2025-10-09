"use client";
import { items } from "@/data/drop-down/mobile";
import {
  Facebook,
  House,
  Instagram,
  Linkedin,
  Menu,
  Plus,
  ShoppingCart,
  SquareChevronDown,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export function MobileHeader() {
  const [mobile, setMobile] = useState(false);
  const [solution, setSolution] = useState(false);
  const [support, setSupport] = useState(false);
  const [service, setService] = useState(false);
  const [product, setProduct] = useState(false);
  const [weAre, setWeAre] = useState(false);
  function toggleMobile() {
    setMobile((prev) => !prev);
  }
  return (
    <div className="block lg:hidden">
      {/* Header bar */}
      <div className="flex justify-between items-center py-3 px-3 bg-blue-300 fixed w-full top-0 z-20">
        <Image
          src="https://elonatech.com.ng/static/media/elonatech.c6083e7d06b4cbab7d90.png"
          alt="elonatech"
          width={130}
          height={50}
          priority
        />

        <div className="flex gap-2">
          <button>
            <House className="w-5 h-5" />
          </button>
          <button>
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button onClick={toggleMobile} className="cursor-pointer">
            {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      {mobile && (
        <>
          <div
            onClick={toggleMobile}
            className="fixed inset-0 bg-black/40 z-10"
          ></div>

          <div className="fixed top-0 right-0 h-screen w-[80%] bg-[#12263d] z-20 pt-20 px-5 text-white overflow-y-auto">
            {/* Solutions */}
            <div className="border-b border-gray-600 pb-3">
              <button
                onClick={() => setSolution(!solution)}
                className="w-full flex justify-between items-center py-2"
              >
                <span className="text-lg">Solutions</span>
                <SquareChevronDown
                  className={`w-5 h-5 transition-transform ${
                    solution ? "rotate-180" : ""
                  }`}
                />
              </button>

              {solution && (
                <div className="mt-2 space-y-4">
                  {items.map((section) => (
                    <div
                      key={section.key}
                      className="bg-gray-100 text-black p-3 rounded-md"
                    >
                      <h3 className="font-semibold text-[#12263d] mb-2">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex justify-between items-center py-2 px-2 hover:bg-gray-200 rounded-md cursor-pointer"
                          >
                            <p>{item}</p>
                            <Plus className="w-4 h-4 text-gray-600" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Support */}
            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => setSupport(!support)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg">Support</span>
                <SquareChevronDown
                  className={`w-5 h-5 transition-transform ${
                    support ? "rotate-180" : ""
                  }`}
                />
              </button>

              {support && (
                <ul className="mt-3 space-y-2 bg-gray-100 text-black rounded-md p-3">
                  {["Technical", "Network", "Remote"].map((label) => (
                    <li
                      key={label}
                      className="text-center py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* services */}
            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => setService(!service)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg">Strategic Services</span>
                <SquareChevronDown
                  className={`w-5 h-5 transition-transform ${
                    support ? "rotate-180" : ""
                  }`}
                />
              </button>
              {service && (
                <ul className="mt-3 space-y-2 bg-gray-100 text-black rounded-md p-3">
                  {["Consulting", "Retainership", "Training"].map((label) => (
                    <li
                      key={label}
                      className="text-center py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* product */}
            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => setProduct(!product)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg">Products</span>
                <SquareChevronDown
                  className={`w-5 h-5 transition-transform ${
                    support ? "rotate-180" : ""
                  }`}
                />
              </button>
              {product && (
                <ul className="mt-3 space-y-2 bg-gray-100 text-black rounded-md p-3">
                  {[
                    "Shop",
                    "Computers",
                    "Printers",
                    "Office Equipment",
                    "POS Sysytems",
                    "Network Devices",
                  ].map((label) => (
                    <li
                      key={label}
                      className="text-center py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Who we are */}
            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => setWeAre(!weAre)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg">Who we are</span>
                <SquareChevronDown
                  className={`w-5 h-5 transition-transform ${
                    support ? "rotate-180" : ""
                  }`}
                />
              </button>
              {weAre && (
                <ul className="mt-3 space-y-2 bg-gray-100 text-black rounded-md p-3">
                  {["Company", "Team", "Portfolio", "Blog", "Career"].map(
                    (label) => (
                      <li
                        key={label}
                        className="text-center py-2 hover:bg-gray-200 rounded-md cursor-pointer"
                      >
                        {label}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            <div className="border-b border-gray-600 py-3">
              <span>Who we are</span>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4 mt-6 pb-10">
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
