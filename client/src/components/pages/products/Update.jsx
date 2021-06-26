import React from "react";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import apiService from "../../../services/ApiService";
const Update = (props) => {
  const [name, setName] = React.useState("Carwash");
  const [price, setPrice] = React.useState(1000);
  const [picture, setPicture] = React.useState(null);
  const { id } = useParams();
  console.log(props);
  const history = useHistory();
  return (
    <div>
      <h2>Edit A New CAR Service</h2>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />
      </div>
      <div className="row mt-3">
        <button
          className="btn btn-info"
          onClick={(e) => {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("picture", picture);
            apiService
              .put("/api/products" + id, formData)
              .then((res) => {
                history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Update;
