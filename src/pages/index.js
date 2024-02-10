import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "/src/assets/logo_gif.gif";
import SolidworksLogo from "/src/assets/solidworks.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main
          className={`flex min-h-screen flex-col items-center justify-between md:flex-row md:p-24 p-10 ${inter.className}`}
      >
        {/*<div className="absolute inset-0 w-full h-full bg-white"*/}
        {/*     style={{clipPath: "polygon(0 0, 0 100%, 50% 75%, 50% 45%, 100% 45%, 100% 0%)"}}></div>*/}
        {/*<div className="absolute inset-0 w-full h-full bg-red-500"*/}
        {/*     style={{clipPath: "polygon(100% 100%, 100% 10%, 50% 35%, 50% 75% ,0 100%)"}}></div>*/}
        <div className="absolute inset-0 w-full h-full bg-white"
             style={{clipPath: "polygon(0 0, 0 100%, 50% 50%, 100% 0%)"}}></div>
        <div className="absolute inset-0 w-full h-full bg-red-500"
             style={{clipPath: "polygon(100% 100%, 100% 0%, 49.9% 49.9% ,0 100%)"}}></div>
        <div className="md:w-1/2 md:pr-16 z-10">
          <div className={"flex"}>
            <Image src={Logo} alt="SRM Team Robocon Logo"
                   className="h-20 w-20 mb-8 md:absolute md:left-[1rem] md:top-[1rem]"/>
            <Image src={SolidworksLogo} alt="Solidworks Logo"
                   className="h-[3.4rem] w-[10rem] mb-8 md:absolute md:left-[8rem] md:top-[2rem] max-md:mt-[1rem] pl-[1rem]"/>
          </div>
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-red-600 mb-2"><a href="https://www.instagram.com/srmteamrobocon/"
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        className="text-red-600">SRM Team<br
                className={"md:hidden"}/> Robocon </a><span className={"text-gray-700"}>Presents</span></h1>
            <h1 className="text-3xl font-semibold text-blue-900 mb-2">Solidworks Bootcamp 2.0</h1>
            <p className="text-black mb-8 font-bold">Three-day Workshop<br className={"md:hidden"}/> on CAD Modelling
            </p>
            <a href="https://docs.google.com/forms/d/1zIynSahCUS2yOzmWiiVimjydZYzCorGjoHA9oWtHUOE/edit" target="_blank"
               rel="noopener noreferrer">
              <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-3 px-6 rounded mb-8">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </main>
  );
}
