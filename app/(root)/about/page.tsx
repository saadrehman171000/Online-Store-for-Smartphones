import Banner from "@/components/shared/Banner";
import HeroAbout from "@/components/shared/HeroAbout";
import Testimonials from "@/components/shared/Testimonials";
import Thinking from "@/components/shared/Thinking";
import VisionAbout from "@/components/shared/VisionAbout";
import React from "react";

const page = () => {
  return (
    <>
      <HeroAbout />
      <VisionAbout />
      <Banner />
      <Testimonials />
      <Thinking />
    </>
  );
};

export default page;
