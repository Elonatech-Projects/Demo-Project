"use client";

import Image from "next/image";
import Link from "next/link";
import { Gem, Headphones, Laptop, Printer } from "lucide-react";

export function HomeSection() {
  return (
    <div className="w-full py-3.5">
      <h1 className="text-center text-sm text-black font-bold sm:text-2xl">
        Why Elonatech
      </h1>
      <div className="bg-[#dc3545] w-[60px] h-[2px] mx-auto"></div>
      <p className="text-black text-center mt-2.5 text-sm lg:text-2xl">
        Top-Notch Technology Service Provider.
      </p>
      <div
        className="
          flex flex-col gap-[14px] 
          lg:flex-row lg:w-[970px] justify-between 
          items-center lg:items-start
          mx-auto
          xl:w-[90%]
          mt-2.5
        "
      >
        {/* ================= LEFT CARD ================= */}
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white  h-[230px] p-5 rounded-md lg:h-[260px] xl:h-[210px] "
          style={{
            backgroundImage: "url('/Scalable_IT_left-min_c8po5r.png')",
          }}
        >
          <p className="text-[16px] sm:text-[20px] font-bold mb-3">
            Website and App Solutions
          </p>
          <p className="text-xs sm:text-[13px]">
            At Elonatech, we build Apps that are not only visually beautiful but
            also functionally.
          </p>
          <p className="text-xs sm:text-[13px]">
            Our team of web strategists, designers, developers, and project
            managers work together to help clients meet their business
            objectives.
          </p>

          <button className="p-2.5 bg-[#dc3545] mt-4 rounded w-fit text-sm lg:text-base">
            Read More
          </button>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div
          className="relative bg-cover bg-center bg-no-repeat  text-white h-[230px] p-5 rounded-md lg:h-[260px] xl:h-[210px] "
          style={{
            backgroundImage: "url('/Scalable_IT_right-min_cjn5fe.png')",
          }}
        >
          <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-bold mb-3">
            Flexible, Scalable IT Solution
          </p>
          <p className="text-xs sm:text-[13px]">
            Having the right company behind your IT system is as important as
            the network itself.
          </p>
          <p className="text-xs sm:text-[13px]">
            Implementing a well-designed, secured enterprise network and
            utilizing the right combination of IT solutions will drive your
            business to the desired level.
          </p>

          <button className="p-2.5 bg-[#dc3545] mt-4 rounded w-fit text-sm lg:text-base">
            Read More
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-[14px] lg:flex-row lg:w-[970px] lg:justify-between mx-auto xl:w-[90%]">
        <div className="flex flex-col gap-10 text-black mt-3.5">
          <div className="flex gap-5 items-start">
            <Headphones className="w-8 h-8" />
            <div>
              <Link className="text-black text-xs" href="">
                Online Support And Installations
              </Link>
              <p className="text-black font-bold text-sm">
                Expertise. Convenience. Customer Experience.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <Laptop className="w-8 h-8" />
            <div>
              <Link className="text-blue-600 text-xs" href="">
                IT Infrastructure &amp; Solutions
              </Link>

              <p className="text-black font-bold text-sm">
                Reliable systems for modern businesses.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <Gem className="w-8 h-8" />
            <div>
              <Link className="text-blue-600 text-xs" href="">
                Quality &amp; Innovation
              </Link>
              <p className="text-black font-bold text-sm">
                We deliver cutting-edge technology with top performance.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <Printer className="w-8 h-8" />
            <div>
              <Link className="text-blue-600 text-xs" href="">
                Hardware &amp; Devices
              </Link>
              <p className="text-black font-bold text-sm">
                We supply and install reliable IT equipment.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/Elonatech_suupport-min_hrc21l.0c2c2ea76dfbd1cda1f3.png"
            alt="roll"
            width={500}
            height={220}
            className="rounded-lg object-contain w-[300px] sm:w-[300px] lg:w-[350px] lg:mr-20 mt-6 xl:w-[400px] mr-3"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-[14px] lg:flex-row lg:w-[970px] lg:justify-between mx-auto xl:w-[90%]">
        <div className="hidden xl:block">
          <h2 className="text-[18px] text-black lg:text-[17px] xl:text-2xl">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <div className="text-black text-xs lg:text-sm leading-7">
            <p>
              We at Elonatech are aware of your need for quality IT services.
              Beyond reasonable doubt, the
            </p>
            <p>
              management of information technology for business is not
              inherently a do-it-yourself-project.
            </p>
            <p>
              Business owners who aren&apos;t tech-savvy need to find quality IT
              solution providers. We are experts in IT
            </p>
            <p>
              related matters, poised to shape the industry by helping clients
              solve complex IT challenges.
            </p>
          </div>
          <div className="text-black mt-7 text-xs lg:text-sm leading-7">
            <p>
              Our company logical services are designed for the
              top-of-the-market corporate clientele&apos; we
            </p>
            <p>
              serve as an interface keeping you above the turmoil of working in
              today&apos;s Nigeria with minimum
            </p>
            <p>
              hassle. We strive to be the leading provider of innovative
              information technologies that improve the
            </p>
            <p>quality of lives.</p>
          </div>
        </div>

        <div className="lg:block xl:hidden">
          <h2 className="text-[18px] font-bold text-black lg:text-[18px] xl:text-2xl">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <div className="mt-2.5 text-black">
            <p>
              We at Elonatech are aware of your need for quality IT services.
              Beyond 
            </p>
            <p>
              doubt, the management of information technology for business is not
            </p>
            <p>
              inherently a do-it-yourself-project.Business owners who aren&apos;t tech
            </p>
            <p>
              -savvy need to find quality IT solution providers. We are experts in IT
            </p>
            <p>
              solution providers. We are experts in IT related matters, poised to
            </p>
            <p>
              shape the industry by helping clients
              solve complex IT challenges.
            </p>

            <div>
              <p>
              Our company logical services are designed for the
              top-of-the-market 
            </p>
            <p>
              corporate clientele&apos; we serve as an interface keeping you above the
            </p>
            <p>
              turmoil of working in
              today&apos;s Nigeria with minimum hassle. We strive
            </p>
            <p>
              to be the leading provider of innovative
              information technologies 
            </p>
            <p>
              that improve the quality of lives.
            </p>
            </div>
          </div>

        </div>

        <div>
          <Image
            src="/One_stop_IT_solution-min_lqmw0y.c47d9758ad9da1d80f35.png"
            alt="roll"
            width={500}
            height={220}
            className="rounded-lg object-contain w-[300px] sm:w-[300px] lg:w-[350px] lg:mr-20 mt-6 2xl:w-[400px] mr-3"
          />
        </div>
      </div>
    </div>
  );
}
