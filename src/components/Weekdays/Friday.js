import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Friday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["	#ff5800", "	#858585"],
      checkImg: {
        "	#ff5800": true,
        "	#858585": false,
      },

      linkImg: {
        "	#ff5800":
          "https://rukminim2.flixcart.com/image/832/832/k51cpe80pkrrdj/fabric/f/c/j/orange-s013-kesari-orange-apnisha-s013-kesari-orange-original-imaesgk9r9qfycnt.jpeg?q=70",

        "	#858585":
          "https://rukminim2.flixcart.com/image/832/832/k51cpe80pkrrdj/fabric/t/p/m/grey-s013-kesari-grey-apnisha-s013-kesari-grey-original-imaesgk9rqbbfvbn.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["	#ff5800", "	#858585"],
      checkImg: {
        "	#ff5800": true,
        "	#858585": false,
      },

      linkImg: {
        "	#ff5800":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/j/0/t/free-2705s694-samah-unstitched-original-imaghjd2hsddzrq6.jpeg?q=70",
        "	#858585":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/t/g/n/-original-imagu22attak5wh3.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["	#ff5800", "	#858585"],
      checkImg: {
        "	#ff5800": true,
        "	#858585": false,
      },

      linkImg: {
        "	#ff5800":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/g/d/n/xs-sedw1ae3w234f-edrio-original-imaguwa9sbkejwb8.jpeg?q=70",
        "	#858585":
          "https://rukminim2.flixcart.com/image/832/832/kybvo280/sweatshirt/p/r/6/s-s-hd-grey-n-h-enterprise-original-imagah9zacmw4fzw.jpeg?q=70",
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
    <div className="App" id="fri">
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

export default Friday;
