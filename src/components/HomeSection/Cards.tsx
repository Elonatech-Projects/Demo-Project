"use client";
import React from "react";

export function Cards() {
  return (
    <div className="w-[97%] sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[1270px] mx-auto mt-10">
      {/* GRID CONTAINER */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-1 
          gap-4 justify-items-center items-center lg:grid-cols-3
        "
      >
        {/* ===== CARD 1 ===== */}
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

        {/* ===== CARD 2 ===== */}
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

        {/* ===== CARD 3 ===== */}
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
