import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import capture from "../assets/capture.JPG";
import askme from "../assets/askme.jpg";
import Table from "../components/Table/index";

const Contact = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-green-50 p-6 sm:p-10 md:p-20 min-h-screen gap-10">
        {/* Left Content - Text */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-green-900 text-lg sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Reach out to us anywhere
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6">
            Read through the FAQs and help articles, call, Whatsapp or use the
            form here, we are always ready to serve you.
          </p>
        </div>
        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={askme}
            alt="Ask me"
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <div>
        <Table/>
      </div>
      {/*Section 3 Download*/}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-center bg-green-200 p-4 sm:p-6 md:p-8 min-h-screen gap-6">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl">
          {/* Heading */}
          <h2 className="text-green-900 text-lg sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Download the app Quick and easy
          </h2>

          {/* Playstore and Appstore Images */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <img
              src={playstore}
              alt="Playstore"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain"
            />
            <img
              src={appstore}
              alt="Appstore"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={capture}
            alt="Mobile app"
            className="w-40 sm:w-48 md:w-56 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};
export default Contact;
