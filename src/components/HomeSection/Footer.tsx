"use client";

import {
  Facebook,
  Forward,
  Instagram,
  Linkedin,
  LoaderPinwheel,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-[#11253d] pb-24 mt-5">
      <div className="grid grid-cols-2 gap-8 ml-5 sm:grid-cols-3 xl:flex xl:justify-center xl:gap-16">
        <div className="text-white text-sm leading-10 mt-14">
          <Image
            src={"/Elonatech icon.176a8c1916da20a23e4f.png"}
            alt="logo"
            width={90}
            height={50}
            className="ml-7"
          />
          <h1 className="font-bold">ELONATECH NIGERIA LIMITED</h1>
          <p>4 , Oluwakemi Street, Shasha Road,</p>
          <div className="leading-5">
            <p>Egbeda, Lagos.</p>
            <p>info@elonatech.com.ng</p>
          </div>
          <p>+234 901 454 4520</p>
          <div className="flex gap-1.5 ">
            <X className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <LoaderPinwheel className="w-5 h-5" />
          </div>
        </div>
        <div className="text-white text-sm mt-16">
          <h1 className="hover:text-[#dc3545] font-bold">Who We Are</h1>
          <div className="text-white text-sm mt-3 leading-8">
            <p className="hover:text-[#dc3545]">Company</p>
            <p className="hover:text-[#dc3545]">Team</p>
            <p className="hover:text-[#dc3545]">Portfolio</p>
            <h3 className="font-bold hover:text-[#dc3545]">Products</h3>
            <p className="hover:text-[#dc3545]">Computers</p>
            <p className="hover:text-[#dc3545]">Printers</p>
            <p className="hover:text-[#dc3545]">Office Equipment</p>
            <p className="hover:text-[#dc3545]">POS Systems</p>
            <p className="hover:text-[#dc3545]">Network Devices</p>
          </div>
        </div>
        <div className="text-white text-sm mt-16">
          <h1 className="font-bold hover:text-[#dc3545] ">Our Services</h1>
          <div className="text-white text-sm  mt-3 leading-8 ">
            <p className="hover:text-[#dc3545]">Computer Engineering</p>
            <p className="hover:text-[#dc3545]">Network Administration</p>
            <p className="hover:text-[#dc3545]">CCTV Installation</p>
            <h3 className="font-bold hover:text-[#dc3545]">Access Control</h3>
            <p className="hover:text-[#dc3545]">IP Telephony</p>
            <p className="hover:text-[#dc3545]">Application Software</p>
            <p className="hover:text-[#dc3545]">Web Design/Dev</p>
            <p className="hover:text-[#dc3545]">Digital Marketing</p>
            <p className="hover:text-[#dc3545]">Social Media Marketing</p>
          </div>
        </div>
        <div className="text-white text-sm mt-16">
          <h1 className="font-bold hover:text-[#dc3545]">Our Services</h1>
          <div className="text-white text-sm mt-3 leading-8">
            <p className="hover:text-[#dc3545]">Brand Development</p>
            <p className="hover:text-[#dc3545]">UI/UX & Prototyping</p>
            <p className="hover:text-[#dc3545]">Motion Graphics</p>
            <h3 className="hover:text-[#dc3545]">Livestreaming</h3>
            <p className="hover:text-[#dc3545]">Network Support</p>
            <p className="hover:text-[#dc3545]">Remote Support</p>
            <p className="hover:text-[#dc3545]">Retainership</p>
            <p className="hover:text-[#dc3545]">Training</p>
            <p className="hover:text-[#dc3545]">Consumables</p>
          </div>
        </div>
        <div className="w-[300px] mt-16">
          <div className="bg-white shadow-md p-3">
            <div className="flex gap-1">
              <Image
                src={"/Elonatech icon.176a8c1916da20a23e4f.png"}
                alt="logo"
                width={50}
                height={40}
              />
              <div>
                <p>Elonatech Nigeria Li....</p>
                <p>7,574 followers</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="flex justify-items-center bg-white shadow-md p-1.5 rounded-[7px]">
                <Facebook className="w-4 h-4" />
                <span className="text-xs">Follow Page</span>
              </button>

              <button className="flex justify-items-center bg-white shadow-md p-1.5 rounded-[7px]">
                <Forward className="w-4 h-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 mt-8">
            <input
              className="border rounded-2xl text-white pl-3.5 h-10"
              type="text"
              placeholder="Your email*"
            />
            <button className="bg-[#dc3545] rounded-2xl h-10">Subscribe</button>
          </div>

          <div className="mt-4 text-white text-xs flex gap-1">
            <input type="checkbox" name="" id="" />
            <span>I accept the</span>
            <span className="underline underline-offset-2 text-blue-600 hover:text-blue-800 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div className="ml-5 flex flex-wrap gap-1.5 text-sm mt-8 lg:flex lg:justify-center">
        <span className="text-white">
          Copyright © 2025 All rights reserved | Designed & Developed by{" "}
        </span>
        <span className="text-[#dc3545]">Elonatech Nigeria Limited</span>
      </div>
    </div>
  );
}
