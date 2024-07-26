import React, { useState } from "react";
import CardData from "./CardData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/action/action.jsx";
const Cards = () => {
  const [data, setData] = useState(CardData);

  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <div
                className="card mx-2 mt-4 card_style"
                style={{ width: "20rem", border: "none" }}
              >
                <img
                  src={element.imgdata}
                  className="card-img-top mt-3"
                  alt="..."
                  style={{ height: "16rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{element.rname}</h5>

                  <p className="card-text">
                    <p>Rating: {element.rating} ★ </p>
                    <p>Price: ₹{element.price}</p>
                  </p>

                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={() => send(element)}
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
