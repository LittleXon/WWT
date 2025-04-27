import React from "react";
import Image from "next/image";

const About = () => {
  return (
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      
      <div id="about" className="max-w-[85rem] px-4 py-0 sm:py-10 mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 text-center">  {/* Réduit my-7 à mb-4 */}
          <h2 className="font-stopbuck text-4xl text-duis text-shadow my-15 mt-20"> 💣🔥 WWT — WORLD WAR THREE 🔥💣 </h2>
          <h3 className="font-stopbuck text-2xl italic text-black mt-6 whitespace-pre-wrap">
            {`😈 Putin. 💥 Kim Jong Un. 🦅 Trump. 

          No peace ✌️. Only nukes ☢️, tanks 🪖 & toxic memes 🤡.
          🌍🔥 The world burns — we profit 💸.

          No roadmap 🗺️. No promises 🤝. Just pure chaos 🧨.
          💥 Buy the dip.                 
          💥 Pray for moon.         
          💥 Enjoy the carnage.
          💀 WWT — If the world ends, WE ALL WIN 🏆.`}
          </h3>
          
        </div>
        <div className="flex justify-center items-center w-full mb-6">  {/* Ajout de mb-6 */}
          <Image
            className="object-cover"
            src="/Welcome.webp"
            width={400}
            height={400}
            alt="Dui Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
