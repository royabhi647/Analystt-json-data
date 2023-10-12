import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function SingleCard(props) {
  const currentData = props?.currentData;
  return (
    <div className="singlePageContainer">
      <div style={{ display: "flex", padding: "25px", width: "100%" }}>
        <div style={{ marginRight: "auto" }}>
          <h5>USERNAME</h5>
          <p>{currentData[0]?.username}</p>
        </div>
        <div style={{ marginRight: "auto" }}>
          <h5>CONTACT</h5>
          <p>{currentData[0]?.name}</p>
        </div>
        <div style={{ marginRight: "auto" }}>
          <h5>CITY</h5>
          <p>{currentData[0]?.address.city}</p>
        </div>
        <div style={{ marginRight: "auto" }}>
          <h5>STREET</h5>
          <p>{currentData[0]?.address.street}</p>
        </div>
        <Link to={"/"} className="edit-button">
          Hide Details
        </Link>
      </div>

      <div className="singlePageDetails">
        <div className="singlePageBox">
          <div>
            <div>
              <h4>Description</h4>
              <p>{currentData[0]?.company.catchPhrase}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ display: "flex" }}>Company</h4>
              <p>{currentData[0]?.company?.name}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ display: "flex" }}>Address</h4>
              <p>City : {currentData[0]?.address?.city}</p>
              <p>Street : {currentData[0]?.address?.street}</p>
              <p>Zipcode : {currentData[0]?.address?.zipcode}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>Website</h4>
              <p>{currentData[0]?.website}</p>
            </div>
          </div>

          <div>
            <div>
              <h4>Name</h4>
              <p>{currentData[0]?.name}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>Phone</h4>
              <p>{currentData[0]?.phone}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>Email</h4>
              <p>{currentData[0]?.email}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>Username</h4>
              <p>{currentData[0]?.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
