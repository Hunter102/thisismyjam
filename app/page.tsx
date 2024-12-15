"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedGrid from "./components/AnimatedGrid";

export default function Home() {
  const nutHome = "/imgs/nut_front.jpg";

  const socials = [
    { href: "https://discord.gg/wbMXmZAx", title: "Discord", imageSrc: "/imgs/discord-icon.png" },
    { href: "https://x.com/NuToriousGG", title: "X", imageSrc: "/imgs/x-icon.png" },
    { href: "https://www.twitch.tv/nutorious_gg", title: "Twitch", imageSrc: "/imgs/twitch-icon.png" },
    { href: "https://void.gg/NuToriousgg", title: "Void", imageSrc: "/imgs/void-icon.png" },
    { href: "/", title: "Faceit", imageSrc: "/imgs/faceit-icon.png" },
    { href: "https://www.youtube.com/channel/UC_IFljWNDPS9zs9ehqWkQNQ", title: "YouTube", imageSrc: "/imgs/youtube-icon.png" },
  ];

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-bl">
      <Header/>
      <div className="w-full h-4 bg-background"></div>
      
      <main className="relative w-full z-10 main-content">
        <div className="grid grid-rows-[35%_auto] w-full h-full">
          <div className="grid justify-items-center">
            <img
              src={"/imgs/jam.jpg"}
              alt="Jam Image"
              className="object-cover w-[60vw] h-[50vh] mt-10"
            />
            <Link href="/products">
              <button
                className="flex items-center justify-center text-center text-xl w-44 h-20 bg-lbl text-foreground rounded-full shadow-lg shadow-foreground hover:scale-105"
              >
                Let's Jam!
              </button>
            </Link>
          </div>

          <AnimatedGrid/>

          {/*  */}

          <div className="w-full h-full grid grid-rows-2">
            <img
                src={"/imgs/img3.jpg"}
                alt="Image 3"
                className="w-full h-full"
              />

            
          </div>

          <div className="w-full h-4 bg-background"></div>

          <Footer/>
        </div>
      </main>
    </div>
  );
}
