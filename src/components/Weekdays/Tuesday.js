import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Tuesday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["#e52b50", "#faee37"],
      checkImg: {
        "#e52b50": true,
        "#faee37": false,
      },

      linkImg: {
        "#e52b50":
          "https://rukminim2.flixcart.com/image/832/832/kctf0cw0/kurta/k/3/3/xl-dffo6-m-lala-fashion-original-imaftv2zjvf9gg9n.jpeg?q=70",

        "#faee37":
          "https://rukminim2.flixcart.com/image/832/832/kcuug7k0/kurta/7/7/l/xxl-dffo4-m-lala-fashion-original-imaftvj5phexwbzk.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["#e52b50", "#faee37"],
      checkImg: {
        "#e52b50": true,
        "#faee37": false,
      },

      linkImg: {
        "#e52b50":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/b/n/h/-original-imaguzbkq9as3kgh.jpeg?q=70",
        "#faee37":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/h/d/o/-original-imagu22aprrd5rwx.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["#e52b50", "#faee37"],
      checkImg: {
        "#e52b50": true,
        "#faee37": false,
      },

      linkImg: {
        "#e52b50":
          "https://rukminim2.flixcart.com/image/832/832/ksru0sw0/jacket/x/r/1/l-no-2175-pink-vero-amore-original-imag69djqgyu4z24.jpeg?q=70",
        "#faee37":
          "https://rukminim2.flixcart.com/image/832/832/ksru0sw0/jacket/x/u/h/xl-no-2175-mustard-vero-amore-original-imag69djma2q5mdz.jpeg?q=70",
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
    <div className="App " id="tue">
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

export default Tuesday;
