import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { client } from "../../Lib/Index";
import Cards from "../Shared/Cards";
import Search from "../Shared/Search";

export default function Countries() {
  const [Country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
    const timeoutId = setTimeout(() => {
      getData();
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  async function getData() {
    try {
      let response;
      if (searchQuery === "") {
        response = await client.get("/all?fields=name,cca3,region,population");
      } else {
        response = await client.get(`/name/${searchQuery}`);
      }
      const data = response.data;
      setCountry(data);
    } catch {
      console.log("error");
    }
  }

  return (
    <>
      <Navbar />
      <Search setSearchQuery={setSearchQuery}/>
      <Cards countries={Country} />
    </>
  );
}
