import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import Team from "../components/Team/index";
import capture from "../assets/capture.JPG";
import flower from "../assets/flower.jpg";

const About = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-green-50 p-6 sm:p-10 md:p-20 min-h-screen gap-10">
        {/* Left Content - Text */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-green-900 text-lg sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Bringing sustainability to people & planet
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6">
            Our goal is simply to build a waste-free world by enabling people to
            use wastes as a currency and giving new life to otherwise wasted
            materials.
          </p>
        </div>
        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={flower}
            alt="flower"
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/*Section 2*/}
      <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
        {/* Heading */}
        <h2 className="text-green-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Powering last-mile waste recovery in Africa
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
          We are leading with innovation, inclusion and people-centricity
        </p>
      </div>

      {/*Section 3 */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-center bg-green-50 p-4 sm:p-6 md:p-8 min-h-screen gap-6">
        {/* Left Content - Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Clean-Out is a comprehensive platform that collects, tokenizes, and
            converts everyday waste materials into high-value, durable consumer
            and industrial products. We leverage innovative, technology-driven
            systems—including Nigeria’s first Reverse Vending Machines—to
            empower a new generation of Africans to sort and recycle waste while
            earning cash rewards through our mobile application, supporting
            their livelihoods. In addition to diverting waste from landfills, we
            collaborate with local community women and youth as “production
            partners” to transform accumulated plastic waste—especially those
            difficult to recycle mechanically—into fabrics for lifestyle
            products such as bags, shoes, and clothing. This initiative provides
            these often-marginalized groups with a sustainable income, helping
            them rebuild and improve their lives.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={capture}
            alt="Mobile app"
            className="w-40 sm:w-48 md:w-56 h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/*Section 4*/}
      <div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-8 sm:px-10 sm:py-12 md:py-16 bg-white">
          <h2 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            We are an enthusiastic, driven small group building for Africa
          </p>

          {/*Section Team*/}
         <Team/>
        </div>
      </div>

      {/*Section 5 Download*/}
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

export default About;
