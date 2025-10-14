import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="bg-[#cccccc] text-black min-h-[290px] mt-10 pt-6 relative overflow-hidden">
      {/* Container */}
      <div className="relative w-[97%] sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[1270px] mx-auto mt-3.5">
        {/* Text Section */}
        <div className=" z-10 relative">
          <h1 className="text-xl font-semibold leading-tight">
            How about a FREE Consultation on the Best Digital Marketing Strategy
            for
          </h1>
          <h1 className="text-xl font-semibold leading-tight">
            your Business?
          </h1>

          <p className="mt-3">
            Want to know how to increase your brand visibility, boost audience
            engagement, drive traffic, increase
          </p>
          <p>
            social media followers, promote your products and services online,
            and increase sales for your
          </p>
          <p>
            business? Elonatech offers tailored advice on how to reach and
            engage your audience better, increase
          </p>
          <p>
            conversions, and maximize profit through a bespoke monthly/yearly
            digital marketing plan for your
          </p>
          <p>business.</p>

          <button className="bg-[#b60903] text-white h-9 px-3 mt-5 rounded-[4px]">
            Get Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="absolute bottom-0 right-0 h-full sm:hidden 2xl:block">
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
