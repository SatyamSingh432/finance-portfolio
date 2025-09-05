import React, { useEffect, useState } from "react";
import Summary from "./components/Summary";
import Sector from "./components/Sector";
import HoldingsTable from "./components/HoldingsTable";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/portfolio");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfolio Dashboard</h1>
      <Summary summary={data.summary} />
      <Sector sectors={data.sectors} />
      <HoldingsTable holdings={data.holdings} />
    </div>
  );
}

export default App;
