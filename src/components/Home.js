import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    // <--Home page details-->
    <div className="d-flex justify-content-center mb-20" id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome to Colors!</div>
        <h2>
          We Suggest Daily <span className="name-hd"> Dress Colors </span>
          <br /> For
          <span className="name-hdd"> Women </span>
        </h2>
        <h4 className="stack-hd">Try it first</h4>
        <Button
          className="d-flex justify-content-center "
          variant="success"
          onClick={() => navigate("/customer-login")}
        >
          Try now
        </Button>
      </div>
    </div>
  );
}

export default Home;
