import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { client } from "../../Lib/Index";
import Cards from "../Shared/Cards";
import Search from "../Shared/Search";
import SelectRegion from "../Shared/SelectREgion";
import loadingimg from "../Images/loading.svg";

export default function Countries() {
  const [Country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getData();
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, selectedRegion]);

  async function getData() {
    try {
      setLoading(true);
      let response;
      if (searchQuery) {
        response = await client.get(`/name/${searchQuery}`);
      } else if (selectedRegion) {
        response = await client.get(`/region/${selectedRegion}`);
      } else {
        response = await client.get("/all?fields=name,cca3,region,population");
      }
      let data = response?.data;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        data = data.filter((c) => c.name?.common?.toLowerCase().includes(q));
      }

      if (selectedRegion) {
        data = data.filter(
          (c) =>
            c.region && c.region.toLowerCase() === selectedRegion.toLowerCase()
        );
      }
      setCountry(data);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container flex flex-col justify-center ">
      <Navbar />
      <div className="flex flex-col sm:flex-row mx-5 mb-5 gap-4">
        <div className="flex-1">
          <Search setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex-1">
          <SelectRegion setSelectedRegion={setSelectedRegion} />
        </div>
      </div>
      {loading ? (
        <img src={loadingimg} alt="loading" className="w-[100px] self-center" />
      ) : (
        <Cards countries={Country} />
      )}
    </div>
  );
}
