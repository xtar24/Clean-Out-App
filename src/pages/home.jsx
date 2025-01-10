import React from "react";
import Services from "../components/Services";
import Actions from "../components/Actions";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import vending from "../assets/vending.JPG";

const Home = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center bg-green-100 p-6 sm:p-10 md:p-20 min-h-screen gap-10">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading */}
          <h2 className="text-green-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Convert Your Waste Into Valuables
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6">
            We collect, tokenize, and transform waste into new products. Earn
            points every time you recycle with us to redeem as cash, shop, or
            donate to charity.
          </p>

          {/* Playstore and Appstore Images */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <img
              src={playstore}
              alt="Playstore"
              className="w-28 sm:w-32 md:w-36 h-auto object-contain"
            />
            <img
              src={appstore}
              alt="Appstore"
              className="w-28 sm:w-32 md:w-36 h-auto object-contain"
            />
          </div>

          {/* Button */}
          <button className="mt-6 bg-green-700 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-green-800 transition-colors">
            Get the App
          </button>
        </div>

        {/* Vending Image */}
        <div className="flex-1">
          <img
            src={vending}
            alt="Vending"
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/*Section 2*/}

      <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
        {/* Heading */}
        <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Join Our Growing Platform
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
          Identify a recycling program that best suits you and get started for
          free.
        </p>

        {/* Services Section */}
        <div className="w-full">
          <Services />
        </div>
      </div>

      {/*Section 3*/}
      <div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
          {/* Heading */}
          <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            How it works
          </h2>

          {/* Services Section */}
          <div className="w-full">
            <Actions />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
