import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getShopData } from "../firebase.js";

function Shop() {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    getShopData(setShop);
  }, []);

  let navigate = useNavigate();

  return (
    <div className="Shop">
      <div className="container pt-5">
        <div className="row">
          <div>
            <h5>Shop Edition</h5>
          </div>
          {shop.map((shop) => (
            <div className="col-md-4 pt-5" key={shop.id}>
              <div
                className="shopBox pt-5"
                onClick={() => {
                  navigate("/shopDetail/" + shop.id, {
                    state: {
                      url: shop.url,
                      name: shop.name,
                      price: shop.price,
                    },
                  });
                }}
              >
                <img src={shop.url + ".jpg"} width="90%" alt="" />
                <p className="pt-5">{shop.name}</p>
                <p className="pt-3">{shop.price}원</p>
                <div className="d-grid gap-1 pt-3">
                  <Button variant="secondary">구매</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
