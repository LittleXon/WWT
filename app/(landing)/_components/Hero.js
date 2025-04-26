import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh">
      {/* Image pour PC */}
      <div className="hidden md:block bg-[url(/lolo.jpg)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"></div>
      
      {/* Image pour mobile */}
      <div className="block md:hidden bg-[url(/lgo.jpg)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"></div>
    </div>
  );
};

export default Hero;