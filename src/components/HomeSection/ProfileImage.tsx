import Image from "next/image";

export function ProfileImage() {
  return (
   <div className="text-black min-h-[255px] pt-6 overflow-hidden relative mt-3.5 w-[95%] sm:w-[90%] lg:w-[970px] xl:w-[1270px] mx-auto">
      {/* Container */}
     <div className="w-[97%] sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[1270px]">
        {/* Text Section */}
        <div className=" z-10 relative ">
          <h1 className="text-[14px] font-bold 2xl:text-[16px] leading-tight">
            How about a FREE Consultation on the Best Digital Marketing Strategy
            for
          </h1>
          <h1 className="text-[14px] font-bold 2xl:text-[16px] leading-tight">
            your Business?
          </h1>

          <p className="mt-3 text-sm ">
            Want to know how to increase your brand visibility, boost audience
            engagement, drive traffic, increase
          </p>
          <p className="text-sm ">
            social media followers, promote your products and services online,
            and increase sales for your
          </p>
          <p className="text-sm ">
            business? Elonatech offers tailored advice on how to reach and
            engage your audience better, increase
          </p>
          <p className="text-sm ">
            conversions, and maximize profit through a bespoke monthly/yearly
            digital marketing plan for your
          </p>
          <p className="text-sm ">business.</p>

          <button className="bg-[#b60903] text-white h-9 px-3 mt-5 rounded-[4px]">
            Get Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden sm:hidden 2xl:block absolute bottom-0 right-0 h-full">
          <Image
            src="/Ceo1.ce4aef99d34db8843883.png"
            alt="CEO"
            width={550}
            height={100}
            className="object-contain lg:w-[400px] right-0 2xl:w-[480px]"
          />
        </div>
      </div>
    </div>

  );
}
