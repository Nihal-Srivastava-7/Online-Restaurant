import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/action/action";
const Header = () => {
  const [price, setPrice] = useState(0);
  // 2:15
  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <nav className="navbar navbar-style">
      <div className="container-fluid">
        <div className="nav-names">
          <NavLink to="/" className="navbar-brand nav-name-style">
            Add to Cart
          </NavLink>
          <NavLink
            to="/"
            className="navbar-brand style-nav-link nav-name-style"
          >
            Home
          </NavLink>
        </div>
        <Badge
          badgeContent={getdata.length}
          color="primary"
          className="nav-badge"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i className="fa-solid fa-cart-shopping nav-icon"></i>
        </Badge>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            {" "}
                            <img
                              src={e.imgdata}
                              style={{ width: "5rem", height: "5rem" }}
                              alt="img"
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price : ₹{e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td
                          className="mt-5"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(e.id)}
                        >
                          <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center">Total : ₹{price}</p>
              </tbody>
            </table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "20rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            ></i>
            <p>Your Cart Is Empty </p>
            <img
              src="./cart.gif"
              alt="cart logo"
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            ></img>
          </div>
        )}
      </Menu>
    </nav>
  );
};

export default Header;
