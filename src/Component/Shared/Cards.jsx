import { Link } from "react-router";
import Search from "./Search";

export default function Cards({ countries }) {
  return (
    <>
      <div className="container grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
        {countries.map((country) => {
          return (
            <div
              key={country.cca3}
              className="flex flex-col border border-gray-300 rounded-lg p-3 gap-1 shadow-lg"
            >
              <h1 className="font-bold text-blue-800">
                <Link to={`/countries/${country.name.common}`}>{country.name.common}</Link>
              </h1>
              <h2>Region: {country.region}</h2>
              <h2>Population: {country.population.toLocaleString()}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
  
}
