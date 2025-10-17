"use client";
import React from "react";

export function Cards() {
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[990px] xl:w-[1290px] mx-auto mt-10">
      <div
        className="
          flex flex-col justify-center gap-3.5 lg:flex-row 
          justify-items-center items-center
        "
      >
        <div
          className="
            relative text-xs sm:text-sm 
            h-[150px] w-full sm:w-[400px] md:w-full lg:w-[300px] xl:w-[395px]
            bg-cover bg-center bg-no-repeat
            flex flex-col items-center justify-center text-white rounded-[4px]
          "
          style={{
            backgroundImage: "url('/User_experience_t6dbvw.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="relative z-10 text-center space-y-1">
            <p>We offer bespoke user experience, web</p>
            <p>design, app design and software</p>
            <p>development services.</p>
          </div>
        </div>

        <div
          className="
            relative text-xs sm:text-sm 
            h-[150px] w-full sm:w-[400px] md:w-full lg:w-[300px] xl:w-[395px]
            bg-cover bg-center bg-no-repeat
            flex flex-col items-center justify-center text-white rounded-[4px]
          "
          style={{
            backgroundImage: "url('/Solution_client_expectation_doxygk.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="relative z-10 text-center space-y-1">
            <p>We endeavor to exceed our client&apos;s</p>
            <p>expectations with the solutions we provide,</p>
            <p>at competitive prices.</p>
          </div>
        </div>

        <div
          className="
            relative text-xs sm:text-sm 
            h-[150px] w-full sm:w-[400px] md:w-full lg:w-[300px] xl:w-[395px]
            bg-cover bg-center bg-no-repeat
            flex flex-col items-center justify-center text-white rounded-[4px]
          "
          style={{
            backgroundImage: "url('/budget_and_time_xv2dk6.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="relative z-10 text-center space-y-1">
            <p>We deliver projects within budget and</p>
            <p>deadline while continuously maintain</p>
            <p>quality & standard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
