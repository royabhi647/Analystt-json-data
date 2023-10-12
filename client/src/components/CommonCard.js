import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function CommonCard(props) {
  const details = props.details;

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const limitedDataPerPage = details?.slice(startIndex, endIndex);
    setDataPerPage(limitedDataPerPage);
  }, [startIndex, endIndex, details]);

  return (
    <>
      {dataPerPage.length > 0 ? (
        dataPerPage.map((data, index) => (
          <div className="cardContainer" key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "25px",
              }}
            >
              <div>
                <h5>USERNAME</h5>
                <p>{data?.username}</p>
              </div>
              <div>
                <h5>CONTACT</h5>
                <p>{data?.name}</p>
              </div>
              <div>
                <h5>CITY</h5>
                <p>{data?.address?.city}</p>
              </div>

              <div>
                <h5>STREET</h5>
                <p>{data?.address?.street}</p>
              </div>

              <Link to={"/currentData/" + data.id} className="edit-button">
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h2>No Record Found</h2>
      )}

      <div className="pagination-container">
        <p
          className="pagination-item"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Prev
        </p>
        <p
          className="pagination-item"
          style={{ cursor: "none", color: "#000" }}
        >
          {currentPage}
        </p>
        <p
          className="pagination-item"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </p>
      </div>
    </>
  );
}

export default CommonCard;
