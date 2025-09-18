import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Link, useParams } from "react-router";
import { client } from "../../Lib/Index";
import loadingimg from "../Images/loading.svg";

export default function Country() {
  const [Country, setCountry] = useState(null);
  const { countryname } = useParams();
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      setLoading(true);
      const response = await client.get(`/name/${countryname}`);
      setCountry(response.data[0]);
      console.log(response.data[0]);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [countryname]);

  return (
    <div className="container flex flex-col items-center justify-center ">
      <Navbar />
      {loading ? (
        <img src={loadingimg} alt="loading" className="w-[100px]" />
      ) : (
        <>
          <div className="flex flex-col gap-3 w-full p-20  justify-between md:flex-row xl:flex-row">
            <div className="w-1/2 flex flex-col gap-5 ">
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl text-blue-800">
                {Country?.name.official}
              </h1>
              <h2 className="text-l xl:text-xl">
                <span className="text-blue-700">Capital:</span>{" "}
                {Country?.capital}
              </h2>
              <h2 className="text-l xl:text-xl">
                <span className="text-blue-700">Region:</span> {Country?.region}
              </h2>
              <h2 className="text-l xl:text-xl">
                <span className="text-blue-700">Subregion:</span>{" "}
                {Country?.subregion}
              </h2>
              <h2 className="text-l xl:text-xl">
                <span className="text-blue-700">Population:</span>{" "}
                {Country?.population.toLocaleString()}
              </h2>
            </div>
            <img
              src={Country?.flags?.svg}
              alt="flag"
              className="w-[300px] h-full rounded-lg shadow-xl/20 "
            />
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg shadow-indigo-500/50">
            <Link to={"/Countries"}>Back to Countries</Link>
          </button>
        </>
      )}
    </div>
  );
}
