import React from "react";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Wednesday = () => {
  const dressData = [
    {
      id: 1,
      name: "Formal Dress",
      colors: ["#1b4d3e", "#e30022"],
      checkImg: {
        "#1b4d3e": true,
        "#e30022": false,
      },

      linkImg: {
        "#1b4d3e":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/gown/u/k/g/0-xl-3-4-sleeve-stitched-abi-gown-dd-s-creation-0-original-imaghj85u73a4gux.jpeg?q=70",

        "#e30022":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/gown/3/o/g/na-l-3-4-sleeve-stitched-vg14-mert-india-na-original-imaggh6zghvdttn6.jpeg?q=70",
      },
    },
    {
      id: 2,
      name: "Traditional Dress",
      colors: ["#1b4d3e", "#e30022"],
      checkImg: {
        "#1b4d3e": true,
        "#e30022": false,
      },

      linkImg: {
        "#1b4d3e":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/l/6/b/free-braso2-o-combo-lorofy-unstitched-original-imagkn64rjnyduvn.jpeg?q=70",
        "#e30022":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/b/b/w/free-braso2-o-combo-lorofy-unstitched-original-imagkymbfmjbfeqj.jpeg?q=70",
      },
    },
    {
      id: 3,
      name: "Winter Wear",
      colors: ["#1b4d3e", "#e30022"],
      checkImg: {
        "#1b4d3e": true,
        "#e30022": false,
      },

      linkImg: {
        "#1b4d3e":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/h/b/g/l-djdkfkkkskfk-the-unicharm-original-imagu5kygsyxa76g.jpeg?q=70",
        "#e30022":
          "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/m/o/o/s-djdkfkkkskfk-the-unicharm-original-imagu5kym8kawyg3.jpeg?q=70",
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
    <div className="App " id="wed">
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

export default Wednesday;
