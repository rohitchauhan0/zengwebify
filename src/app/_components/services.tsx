import React from "react";
import ServiceCard from "./service_card";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen relative text-center py-20 px-6">
      {/* Left Column (Sticky) */}
      <div className="md:sticky md:top-20 self-start text-left">
        <h2 className="text-4xl md:text-5xl font-bricolage-grotesque font-extrabold text-gray-900 leading-tight">
          Transforming Ideas Into{" "}
          <span className="text-blue-500">Digital Experiences</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
          From strategy and design to development and launch, we craft innovative,
          user-friendly solutions that help brands grow, connect, and stand out in
          the digital world.
        </p>
      </div>

      {/* Right Column (Scrollable) */}
      <div className="flex flex-col space-y-10">
        <ServiceCard
          video="/video/brand_identity.mp4"
          title="Brand Identity"
          p1="Brand Identity"
          p2="Logos and Visual Identities"
          p3="Names and Slogans"
        />
        <ServiceCard
          video="/video/website_design.mp4"
          title="Website Design"
          p1="Custom & Open-Source"
          p2="UX/UI Design + Interactive Development"
          p3="Eco-Design and Digital Sobriety"
        />
        <ServiceCard
          video="/video/brand_implementation.mp4"
          title="Print Media"
          p1="Brochures, Posters"
          p2=" POS Displays, Signs, and Signage"
          p3="Cultural Communication and Specialized Magazines"
        />
      </div>
    </div>
  );
};

export default Services;
