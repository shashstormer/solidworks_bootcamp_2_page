import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "/src/assets/logo_gif.gif";
import SolidworksLogo from "/src/assets/solidworks_icon.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between md:flex-row md:p-24 p-10 ${inter.className}`}
    >
      <div className="md:w-1/2 md:pr-16">
        <div className={"flex"}>
                  <Image src={Logo} alt="SRM Team Robocon Logo" className="h-20 w-20 mb-8 md:absolute md:left-[1rem] md:top-[1rem]"/>
        <Image src={SolidworksLogo} alt="Solidworks Logo" className="h-[3.4rem] w-[3.4rem] mb-8 md:absolute md:left-[8rem] md:top-[2rem] max-md:mt-[1rem] pl-[1rem]"/>

        </div>
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-2">Register For Solidworks Bootcamp 2.0</h1>
          <p className="text-gray-400 mb-8">Organized by <a href="https://www.instagram.com/srmteamrobocon/"
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="text-red-600">SRM Team Robocon</a></p>
          <a href="https://docs.google.com/forms/d/1zIynSahCUS2yOzmWiiVimjydZYzCorGjoHA9oWtHUOE/edit" target="_blank"
             rel="noopener noreferrer">

            <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-3 px-6 rounded mb-8">Register
              Now
            </button>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 md:pl-16">
        <div className="bg-gray-800 p-8 rounded-md">
          <p><strong>Dates:</strong> 26-28 February, 2024</p>
          <p><strong>Timings:</strong> 9 AM - 4 PM</p>
          <p><strong>Price for Registration:</strong> Rs 599/-</p>
          <p><strong>Contact:</strong></p>
          <ul className="list-disc ml-8 mb-4">
            <li>+91 6376785940</li>
            <li>+91 9110590876</li>
          </ul>
          <p>Our team will contact participants for further procedure. Participants will receive a certificate on completion of Solidworks Bootcamp 2.0. OD and refreshments will be provided along with breaks to the participating students on each day of the Solidworks Bootcamp 2.0.</p>
        </div>
      </div>
    </main>
  );
}
