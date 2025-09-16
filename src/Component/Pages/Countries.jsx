import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { client } from "../../Lib/Index";
import Cards from "../Shared/Cards";

export default function Countries() {
  const [Country, setCountry] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await client.get(
        "/all?fields=name,cca3,region,population"
      );
      const data = response.data;
      setCountry(data);
      console.log(data);
    } catch {
      console.log("error");
    }
  }

  return (
    <>
      <Navbar />
      <Cards countries={Country} />
    </>
  );
}
