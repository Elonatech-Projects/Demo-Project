"use client";

import { Gem, Headphones, Laptop, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeSection() {
  return (
    <section className="bg-white pt-3.5 w-full">
      <h1 className="text-3xl text-black font-bold text-center">
        Why Elonatech
      </h1>
      <p className="text-center text-black font-bold mb-4 mt-5">
        Top-Notch Technology Service Provider
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-4 lg:px-10 py-0 lg:w-[80%] m-auto">
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col gap-8">
          {/* Top Section (Background Image Card) */}
          <div className="relative w-full min-h-[35vh] overflow-hidden rounded-lg lg:min-h-[25vh]">
            <Image
              src="/Scalable_IT_left-min_c8po5r.png"
              alt="Website and App Solutions"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              // sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center z-10 px-6">
              <p className="text-[19px] lg:text-3xl font-bold mb-3">
                Website and App Solutions
              </p>
              <p className="text-sm lg:text-base">
                At Elonatech, we build Apps that are not only visually beautiful
                but also functionally.
              </p>
              <p className="text-sm lg:text-base">
                Our team of web strategists, designers, developers, and project
                managers.
              </p>
              <p>Work together to help clients meet thier business objective</p>
              <button className="p-3.5 bg-blue-600 mt-4 rounded w-fit text-sm lg:text-base">
                Read More
              </button>
            </div>
          </div>

          {/* Middle Section (Features List) */}
          <div className="space-y-5">
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

          {/* Bottom Section (Text) */}
          <div className="text-black font-bold">
            <h2 className="text-[19px] font-bold mb-3 lg:text-2xl">
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
                Business owners who aren&apos;t tech-savvy need to find quality
                IT solution providers. We are experts in IT
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
                serve as an interface keeping you above the turmoil of working
                in today&apos;s Nigeria with minimum
              </p>
              <p>
                hassle. We strive to be the leading provider of innovative
                information technologies that improve the
              </p>
              <p>quality of lives.</p>
            </div>
          </div>

          <div className="text-black text-xs font-bold lg:text-sm leading-7">
            <p>
              We delight in satisfying our clients through the provision of
              innovative, quality, timely, relevant,
            </p>
            <p>
              accurate and affordable solutions to their needs. &quot;Our
              concept is to provide One-Stop &apos;IT&apos; solution&quot;
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col gap-8">
          {/* Background Image Card */}
          <div className="relative w-full min-h-[35vh] overflow-hidden rounded-lg lg:min-h-[25vh]">
            <Image
              src="/Scalable_IT_right-min_cjn5fe.png"
              alt="Website and App Solutions"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center z-10 text-white px-6">
              <p className="text-[19px] lg:text-3xl font-bold mb-3">
                Flexible, Scalable IT Solution
              </p>
              <p className="text-sm lg:text-base">
                Having the right company behind your IT system is as important
                as the network
              </p>
              <p className="text-sm lg:text-base">
                itself. Implementing a well-designed, secured enterprise network
                and utilizing the
              </p>
              <p>
                right combination of IT solutions will drive your business to
                the disred level
              </p>
              <button className="p-3.5 bg-blue-600 mt-4 rounded w-fit text-sm lg:text-base">
                Read More
              </button>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-center justify-center">
            <Image
              src="/Elonatech_suupport-min_hrc21l.0c2c2ea76dfbd1cda1f3.png"
              alt="elo"
              width={450}
              height={220}
              className="rounded-lg object-contain"
            />

            <Image
              src="/One_stop_IT_solution-min_lqmw0y.c47d9758ad9da1d80f35.png"
              alt="roll"
              width={450}
              height={220}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
