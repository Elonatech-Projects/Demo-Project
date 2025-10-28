"use client";

import Image from "next/image";
import Link from "next/link";
import { Gem, Headphones, Laptop, Printer } from "lucide-react";

export function HomeSection() {
  return (
    <div className="m-auto w-full py-3.5 lg:w-[930px] xl:w-full ">
      <h1 className="text-center text-sm text-black font-bold sm:text-2xl w-lg:text-3xl">
        Why Elonatech
      </h1>
      <div className="mt-3  w-[100px] h-[2px] mx-auto bg-[#dc3545]"></div>
      <p className="text-black text-center text-[17px] mt-2.5 text-sm lg:text-2xl">
        Top-Notch Technology Service Provider.
      </p>
      <div
        className="
          flex flex-col gap-[14px] 
          md:w-full
          lg:flex-row lg:justify-between 
          items-center lg:items-start
          mx-auto
          xl:w-full
          mt-2.5
        "
      >
        {/* ================= LEFT CARD ================= */}
        <div
          className="w-full h-[250px] relative bg-cover bg-center bg-no-repeat text-white p-5 rounded-md md:w-[97%] lg:h-[260px] xl:h-[200px] xl:w-[70%]"
          style={{
            backgroundImage: "url('/Scalable_IT_left-min_c8po5r.png')",
          }}
        >
          <h1 className="text-[16px] font-bold sm:text-[20px] ">
            Website and App Solutions
          </h1>
          <p className="text-xs leading-6 sm:text-[13px] lg:text-[15px]">
            At Elonatech, we build Apps that are not only visually beautiful but
            also functionally.
          </p>
          <p className="text-xs leading-6 sm:text-[13px] lg:text-[15px]">
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
          className="w-full h-[250px] relative bg-cover bg-center bg-no-repeat  text-white p-5 rounded-md md:w-[97%] lg:h-[260px] xl:h-[200px] xl:w-[70%]"
          style={{
            backgroundImage: "url('/Scalable_IT_right-min_cjn5fe.png')",
          }}
        >
          <h1 className="text-[16px] sm:text-[20px] lg:text-[22px] font-bold ">
            Flexible, Scalable IT Solution
          </h1>
          <p className="text-xs leading-6 sm:text-[13px] lg:text-[15px]">
            Having the right company behind your IT system is as important as
            the network
          </p>
          <p className="text-xs leading-6 sm:text-[13px] lg:text-[15px]">
            Implementing a well-designed, secured enterprise network and
            utilizing the right IT solutions will drive your business to the
            desired level.
          </p>

          <button className="p-2.5 bg-[#dc3545] mt-4 rounded w-fit text-sm lg:text-base">
            Read More
          </button>
        </div>
      </div>

      <div className="m-auto mt-6 flex flex-wrap justify-center gap-[14px] lg:flex-row lg:w-[990px] lg:justify-between xl:w-full">
        <div className="flex flex-col gap-10 text-black mt-3.5">
          <div className="flex gap-5 items-start">
            <Headphones className="w-8 h-8" />
            <div>
              <Link
                className="text-[#34548c] text-sm underline underline-offset-2"
                href=""
              >
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
              <Link
                className="text-[#34548c] text-sm underline underline-offset-2"
                href=""
              >
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
              <Link
                className="text-[#34548c] text-sm underline underline-offset-2"
                href=""
              >
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
              <Link
                className="text-[#34548c] text-sm underline underline-offset-2"
                href=""
              >
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
            className="rounded-lg object-contain w-[300px] lg:w-[300px] lg:mr-20 mt-6 xl:w-[480px] mr-0"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[14px] lg:flex lg:w-[990px] lg:justify-between xl:w-full mt-6">
        <div className="block md:hidden lg:hidden xl:hidden">
          <h2 className="text-[18px] font-bold text-black lg:text-[18px] xl:text-2xl">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <div className="mt-2.5 text-black ">
            <p>We at Elonatech are aware of your need for quality</p>
            <p>IT services.Beyond doubt, the management of in-</p>
            <p>formation technology for business is not inherently </p>
            <p> do-it-yourself-project. Business owners who aren&apos;t</p>
            <p>tech -savvy need to find quality IT solution prov-</p>
            <p>viders.We are experts in IT related matters,poised to</p>
            <p>shape industry by helping clients solve complex IT</p>
            <p>challenges.Our Company&apos;s logistical services are </p>
            <p>designed for the top-of-the-market corporate </p>
            <p>clientele; we serve as an interface keeping you </p>
            <p>above the turmoil of working in today Nigeria with </p>
            <p>minimum hassle.We strive to be the leading </p>
            <p>provider of innovative information technologies that </p>
            <p>improve the quality of lives.We delight in satisfying </p>
            <p>our clients through the provision of innovative,</p>
            <p>quality, timely, relevant,accurate and affordable </p>
            <p>solutions to their needs. Our concept is to provide </p>
            <p>One-Stop &apos;IT&apos; solution</p>
          </div>
        </div>

        <div className="hidden md:block mt-4 lg:hidden">
          <h2 className="text-[18px] font-bold text-black lg:text-[17px] xl:text-2xl">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <div className="text-black  leading-7">
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
          <div className="text-black mt-7  leading-7">
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

        <div className="hidden lg:block mt-3.5">
          <h2 className="text-[18px] font-bold text-black lg:text-[18px] xl:text-2xl">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <div className="mt-5">
            <p>
              We, at Elonatech are aware of your need for quality IT Services.
              Beyond reasonable doubt, the
            </p>
            <p>
              management of information technology for business is not
              inherently a do-it-yourself project.
            </p>
            <p>
              Business owners who aren&apos;t tech-savvy need to find quality IT
              solution providers. We are experts in IT
            </p>
            <p>
              related matters, poised to shape the industry, by helping clients
              solve complex IT challenges.
            </p>
          </div>

          <div className="mt-5">
            <p>
              Our Company&apos;s logistical services are designed for the
              top-of-the-market corporate clientele; we
            </p>
            <p>
              serve as an interface keeping you above the turmoil of working in
              today&apos;s Nigeria with minimum
            </p>
            <p>
              hassle We strive to be the leading provider of innovative
              information technologies that improve the
            </p>
            <p>quality of lives.</p>
          </div>

          <div className="mt-5">
            <p>
              We delight in satisfying our clients through the provision of
              innovative, quality, timely, relevant,
            </p>
            <p>
              accurate and affordable solutions to their needs. “Our concept is
              to provide One-Stop IT solution
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/One_stop_IT_solution-min_lqmw0y.c47d9758ad9da1d80f35.png"
            alt="roll"
            width={500}
            height={220}
            className="rounded-lg object-contain w-[300px] lg:w-[270px] lg:mr-20 mt-6 xl:w-[460px]"
          />
        </div>
      </div>
    </div>
  );
}
