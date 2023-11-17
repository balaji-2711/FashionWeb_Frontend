import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Monday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["#1c2e33", "#792020"],
      checkImg: {
        "#1c2e33": true,
        "#792020": false,
      },

      linkImg: {
        "#1c2e33":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/3/6/v/m-fashion-blue-m-mahi-collection-original-imagsqgfegzybcps.jpeg?q=70",

        "#792020":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/d/g/1/m-fashion-wine-m-mahi-collection-original-imagsqgfzrhqewzz.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["#1c2e33", "#792020"],
      checkImg: {
        "#1c2e33": true,
        "#792020": false,
      },

      linkImg: {
        "#1c2e33":
          "https://rukminim2.flixcart.com/image/832/832/knexksw0/sari/w/c/l/free-mahek-saree-ejoty-fashion-unstitched-original-imag23m3mwejkhfc.jpeg?q=70",
        "#792020":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/a/9/g/-original-imagux9qstmzpy7g.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["#1c2e33", "#792020"],
      checkImg: {
        "#1c2e33": true,
        "#792020": false,
      },

      linkImg: {
        "#1c2e33":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/w/w/f/s-86324-0064-levi-s-original-imaggbstuqtdwdgc.jpeg?q=70",
        "#792020":
          "https://rukminim2.flixcart.com/image/832/832/l4fxh8w0/sweatshirt/v/r/h/-original-imagfc3pyag6ggt2.jpeg?q=70",
      },
    },
  ];

  const [cars, setCars] = useState(dressData);
  const handleChooseColor = (id, color) => {
    setCars((prev) => {
      return prev.map((car) => {
        if (car.id === id) {
          let newCheckImg = {};
          //Change all property checkImg false, but color clicked = true
          Object.keys(car.checkImg).map((item) => {
            car.checkImg[item] = false;
            newCheckImg = { ...car.checkImg, [color]: true };
            return null;
          });

          return { ...car, checkImg: newCheckImg };
        } else {
          return car;
        }
      });
    });
  };

  return (
    <>
      <Sidebar />
      <div className="App pt-5" id="mon">
        <div className="fade" />
        <div className="content">
          <div className="d-flex ">
            {cars.map((car) => (
              <div key={car.id} className="cart">
                {/* Render ImG  */}
                {/* If Checkimg property true => render img with that property
                 */}
                {Object.keys(car.checkImg).map((item) => {
                  if (car.checkImg[item]) {
                    return (
                      <img
                        key={item}
                        src={car.linkImg[item]}
                        alt={car.name}
                                                                                                                                                          style={{
                                                                                                                                                            width: "28em",
                                                                                                                                                            height: "30em",
                                                                                                                                                            borderRadius: "2em",
                                                                                                                                                            margin: "1.2em",
                                                                                                                                                            paddingTop: "5px",
                                                                                                                                                          }}
                      />
                    );
                  } else {
                    return null;
                  }
                })}

                <p className="text-center">{car.name}</p>

                <div className="d-flex justify-content-center">
                  <div className="colors d-flex">
                    {car.colors.map((color) => (
                      <p
                        key={color}
                        className={` ${car.checkImg[color] && "active"}`}
                        style={{
                          backgroundColor: color,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          marginRight: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => handleChooseColor(car.id, color)}
                      ></p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Monday;
