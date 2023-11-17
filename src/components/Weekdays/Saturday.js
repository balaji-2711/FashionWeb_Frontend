import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Saturday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["	#8ee5ee", "	#800080"],
      checkImg: {
        "	#8ee5ee": true,
        "	#800080": false,
      },

      linkImg: {
        "	#8ee5ee":
          "https://rukminim2.flixcart.com/image/832/832/l3vxbbk0/fabric/t/p/d/yes-2-m-unstitched-2-m-2-5-m-thira-1516-thira-original-imagewqafhqzykth.jpeg?q=70",

        "	#800080":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/1/o/5/yes-2-25-m-unstitched-2-m-2-5-m-f-divya-shree-hari-fab-original-imagrv9hxsytufzz.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["	#8ee5ee", "	#800080"],
      checkImg: {
        "	#8ee5ee": true,
        "	#800080": false,
      },

      linkImg: {
        "	#8ee5ee":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/r/v/n/-original-imaguzbkkrnrmkgh.jpeg?q=70",
        "	#800080":
          "https://rukminim2.flixcart.com/image/832/832/kwnv6a80/sari/a/x/s/free-chiffon-dot-wine-fabmora-unstitched-original-imag9ajzgffhtnxz.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["	#8ee5ee", "	#800080"],
      checkImg: {
        "	#8ee5ee": true,
        "	#800080": false,
      },

      linkImg: {
        "	#8ee5ee":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/5/w/s/3xl-1-no-wj627-love-london-original-imagu23jzwzsdr2f.jpeg?q=70",
        "	#800080":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/z/c/i/xxl-no-plswmjkt04-yha-original-imagtzuyc5eyhxht.jpeg?q=70",
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
    <div className="App" id="sat">
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

export default Saturday;
