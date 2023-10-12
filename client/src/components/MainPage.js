import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";

function MainPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-data-w7gz.onrender.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <p>Loading data...</p> : <CommonCard details={data} />}
    </div>
  );
}

export default MainPage;
