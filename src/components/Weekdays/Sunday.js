import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Sunday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["#fdd768", "	#480607"],
      checkImg: {
        "#fdd768": true,
        "	#480607": false,
      },

      linkImg: {
        "#fdd768":
          "https://rukminim2.flixcart.com/image/832/832/kbi9h8w0/kurta/f/s/p/xxl-905460bge-vedana-original-imafsu4mbrzsvpdw.jpeg?q=70",

        "	#480607":
          "https://rukminim2.flixcart.com/image/832/832/k0cqqvk0/fabric/u/v/9/sgpri1505-miraan-original-imafk5x7qfzpmgqk.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["#fdd768", "	#480607"],
      checkImg: {
        "#fdd768": true,
        "	#480607": false,
      },

      linkImg: {
        "#fdd768":
          "https://rukminim2.flixcart.com/image/832/832/kl175ow0/sari/3/k/a/free-as-1466-10-kashvi-sarees-unstitched-original-imagy8zzvakek5uk.jpeg?q=70",
        "	#480607":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/1/g/f/-original-imagvbthz3nbtxwf.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["#fdd768", "	#480607"],
      checkImg: {
        "#fdd768": true,
        "	#480607": false,
      },

      linkImg: {
        "#fdd768":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/e/5/d/40-pkkhalfwoolblouse-light-biscuit-brown-femula-original-imagu8sfhngurnhc.jpeg?q=70",
        "	#480607":
          "https://rukminim2.flixcart.com/image/832/832/ku04o7k0/shopsy-blouse/z/l/k/free-pkkhalfdarkbrown-femula-original-imag787ag2nuqegg.jpeg?q=70",
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
    <div className="App" id="sun">
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

export default Sunday;
