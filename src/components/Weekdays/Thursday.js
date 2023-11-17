import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Thursday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["	#ffe1ff", "#000000"],
      checkImg: {
        "	#ffe1ff": true,
        "#000000": false,
      },

      linkImg: {
        "	#ffe1ff":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/w/b/f/xl-506-blue-mehsoos-original-imagnuz8thhxfh6p.jpeg?q=70",

        "#000000":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/p/y/b/l-506-blue-mehsoos-original-imaghaznpbkyrxrj.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["	#ffe1ff", "#000000"],
      checkImg: {
        "	#ffe1ff": true,
        "#000000": false,
      },

      linkImg: {
        "	#ffe1ff":
          "https://rukminim2.flixcart.com/image/832/832/kt64fbk0/sari/v/h/d/free-half-halfmeenakari-reshamdor-sarees-no-blouse-original-imag6kp6tzzzcysf.jpeg?q=70",
        "#000000":
          "https://rukminim2.flixcart.com/image/832/832/l23mhzk0/sari/l/6/g/free-dhakai-jamdani-meenakari-color-meena-reshamdor-sarees-no-original-imagdgr8ugxrc7kv.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["	#ffe1ff", "#000000"],
      checkImg: {
        "	#ffe1ff": true,
        "#000000": false,
      },

      linkImg: {
        "	#ffe1ff":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/n/o/m/m-kljnnvsdvkunj-pockman-original-imagpgxpzpess2hf.jpeg?q=70",
        "#000000":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/c/t/7/m-kljnnvsdvkunj-pockman-original-imagpgxpyg8achkp.jpeg?q=70",
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
    <div className="App" id="thu">
      <Sidebar />
      <div className="fade" />
      <div className="content">
        <div className="d-flex">
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
                        marginTop: "5em",
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
  );
};

export default Thursday;
