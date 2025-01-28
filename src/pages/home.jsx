import React from "react";
import Services from "../components/Services";
import Actions from "../components/Actions";
import Rewards from "../components/Rewards";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import vending from "../assets/vending.JPG";
import paper from "../assets/paper.jpeg";
import plastic from "../assets/Plastic.jpg";
import glass from "../assets/glass.jpeg";
import metal from "../assets/metal.jpg";
import bins from "../assets/bins.png";
import Testimonies from "../components/Testimonies";
import Partnership from "../components/Partnership";

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

      {/*Section 4*/}
      <div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
          {/* Heading */}
          <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Waste we collect
          </h2>

          {/* Services Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
            <img
              src={plastic}
              alt="Plastic"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <img
              src={glass}
              alt="Glass"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <img
              src={metal}
              alt="Metal"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <img
              src={paper}
              alt="Paper"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/*Section Rewards*/}
      <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
        <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Rewards for Recycling
        </h2>
        <Rewards />
      </div>

      {/*Section Explore*/}
      <div className="min-h-screen bg-green-200 p-6 sm:p-10 md:p-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Build a sustainable culture, enjoy seamless recycling experience
            </h3>
            <p className="text-gray-700">
              Get everyone in your home, office, or event sorting their wastes
              and recycling with our innovative products and devices.
            </p>
            <a
              href="#products"
              className="mt-6 bg-green-700 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Explore Products
            </a>
          </div>

          {/* Right Content (Image) */}
          <div className="flex justify-center">
            <img
              src={bins}
              alt="Waste bins"
              className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section*/}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Join 5,000+ Households
          </h3>
          <p className="text-gray-700 max-w-2xl">
            Transform the way you consume and manage waste with Clean-Out.
          </p>
        </div>
      </div>

      {/* Section Testimony */}
      <div>
        <Testimonies />
      </div>

      {/*Section  */}
      <div className="min-h-screen bg-green-200 p-6 sm:p-10 md:p-20 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              We are open to partnerships
            </h3>
            <p className="text-gray-700">
              We have solutions to help you incorporate a sustainable recycling
              program and/or shift to eco-friendly alternatives to avoid wastes
              all together. Our model is consumer-focused and designed to be
              scalable, socially and environmentally sound
            </p>
            <a
              href="#products"
              className="mt-6 bg-green-700 text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Right Content (Image) */}
          <div className="flex justify-center">
            <Partnership/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
