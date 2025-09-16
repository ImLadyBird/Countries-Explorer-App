import Navbar from "../Shared/Navbar";
import mainimg from "../Images/main.webp";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container flex flex-col px-2 py-32 md:px-12 md:flex-row md:gap-10">
        <div className="flex flex-col items-start justify-center  ">
          <h1 className="text-4xl font-extrabold lg:text-5xl">
            Explore Countries with
          </h1>
          <h1 className="text-4xl font-extrabold lg:text-5xl text-blue-900">
            Real-Time Data
          </h1>
          <p className="text-l font-medium text-black-500 my-5 lg:text-xl">
            Discover details about every country around the world from capitals
            to regions!
          </p>
          <div className="flex flex-col md:flex-row w-full md:gap-2 ">
            <button className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-md  hover:bg-white hover:text-black  md:px-6 md:py-4 md:font-medium cursor-pointer">
              <Link to={"/countries"}>Explore Now</Link>
            </button>
            <button className="flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black md:px-6 md:py-4 md:font-medium cursor-pointer">
              <Link to={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>
        <img src={mainimg} alt="image" className="w-full rounded-lg md:w-1/2" />
      </div>
    </div>
  );
}
