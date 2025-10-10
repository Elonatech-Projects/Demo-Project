"use client";
import {
  ChevronDown,
  Facebook,
  House,
  Instagram,
  Linkedin,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { items } from "@/data/drop-down/mobile";
export function DesktopHeader() {
  const [hovered, setHovered] = useState<string | null>("tech");

  return (
    <div className="hidden lg:block text-white shadow-md">
      <div className=" mx-auto flex justify-between items-center px-6 py-3">
        <Image
          src="https://elonatech.com.ng/static/media/elonatech.c6083e7d06b4cbab7d90.png"
          alt="Elonatech"
          width={140}
          height={40}
          className="cursor-pointer"
          priority
        />

        <ul className="flex items-center gap-6  font-medium relative text-white">
          <li className="cursor-pointer hover:text-blue-600 transition">
            <House className="w-5 h-5" />
          </li>

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </div>

            <div className="absolute top-full left-0 mt-2 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 grid grid-cols-3  gap-6 z-50">
              <ul className="relative flex flex-col gap-4 w-64 text-gray-800">
                {items.map((item) => (
                  <li
                    key={item.key}
                    className={`relative cursor-pointer w-[145px] hover:text-red-600 ${
                      item.title === "Tech Support"
                        ? "bg-pink-500 rounded-[15px]"
                        : "bg-transparent"
                    }`}
                    onMouseEnter={() => setHovered(item.key)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className="bg-pink-500 rounded-[15px] p-2 w-[145px]">
                      {item.title}
                    </p>

                    {/* Dropdown on hover */}
                    {hovered === item.key && (
                      <div className="fixed top-24 z-50 ml-48">
                        {/* Text list */}
                        <div className="flex gap-2 text-sm">
                          {item.list.map((text, idx) => (
                            <p
                              key={idx}
                              className="hover:text-red-500 cursor-pointer"
                            >
                              {text}
                            </p>
                          ))}
                        </div>

                        {/* Images (scrollable if needed) */}
                        <div className="flex justify-center gap-9 mt-3.5">
                          {[...Array(4)].map((_, idx) => (
                            <Image
                              key={idx}
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3cS0oDQRSF4bOMGLeijg1xHT7mPhYQtxQcxYHBjRinKiYOFCIlDRUIwQz0eLGr+v+gB0GocH86r5ZqCQAAAABKcCRpIulNUqrkWOSZhtHxrlswbAo+RpFnXvME75LOJe2oHs0sF3m2FHUm3ubFm3i1uswzNi/nP7fIi/dUr16ecR6x+Oo9onYpas5tC6fCDwKqkoClIaCJgCYCmghoIqCJgCYCmghoIqCJgCYCmghoIqCJgCYCmghoIqCJgCYCmghoIqCJgCYCmghoIqCJgCYCmghoImBtAVOhBwFVeMDahM35kheuaXvDpt0845MC3OTFm/0UtbrKM44jFt+X9Jk3ozT7KfqqRz/H+5C0lLQX9UQn+Qk23yfuJU0Lfryap5ntWIHOtgScSror+PF6wFMFOVh7Cde8V26Z367CPkS6sFduHPk1pgt75Z4jFueLtKmWgENJj5JmkgZt+SmX/umH/2/M1tZ7+OGcFgKaankJD/JZ2Jx9h9/8nasxprCA8w5djXmNWHzSoasxk6iP/9SBqzEp8gY8oxb8DyOVeuOdlWE+xRctGLa4Wz8BAAAAgGxf3GNlldRIpA0AAAAASUVORK5CYII="
                              alt="placeholder"
                              width={25}
                              height={30}
                              className="w-16 h-16 object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Support</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </div>

            <ul className="absolute z-40 left-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 w-48  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">
                Technical Support
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Network Support
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Remote Support
              </li>
            </ul>
          </li>

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Strategic Services</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </div>

            <ul className="absolute z-40 left-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Consulting</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Retainership
              </li>
              <li className="hover:text-blue-500 cursor-pointer">Training</li>
            </ul>
          </li>

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Products</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </div>

            <ul className="absolute z-40 left-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm space-y-2">
              {[
                "Shop",
                "Computers",
                "Printers",
                "Office Equipment",
                "POS Systems",
                "Network Devices",
              ].map((item) => (
                <li key={item} className="hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </li>

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              <span>Who We Are</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </div>

            <ul className="absolute z-40 left-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm space-y-2">
              {["Company", "Team", "Portfolio", "Blog", "Career"].map(
                (item) => (
                  <li key={item} className="hover:text-blue-500 cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </li>

          <li className="cursor-pointer hover:text-blue-600">Get in Touch</li>
        </ul>

        <div className="flex items-center gap-3 text-gray-600">
          <ShoppingCart className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
