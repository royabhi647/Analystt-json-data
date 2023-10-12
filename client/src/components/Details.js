import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

function Details() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentData = data?.filter((item) => item?.id === Number(params?.id));
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
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <SingleCard currentData={currentData} />
      )}
    </div>
  );
}

export default Details;
