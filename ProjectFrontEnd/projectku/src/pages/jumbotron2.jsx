import React, { Component } from "react";

class Jumbotron2 extends Component {
  state = {};
  render() {
    return (
      <div className="menu2">
        <div className="menu2flex">
          <img
            src="https://pbs.twimg.com/media/D0WO3AmWwAAaOL-?format=jpg&name=4096x4096"
            // https://pbs.twimg.com/media/EPTnOoOX4AEybTy?format=jpg&name=large
            style={{ width: "100%", height: "100%" }}
          />
          {/* <h2 className="menu2gambarText1">Equipment</h2> */}
          <h1 className="menu2gambarText2">
            SAFETY CAN BE FUN,
            <br /> START NOW!
          </h1>
          <button className="menu2gambarText3">View More</button>
        </div>

        <div className="menukanan2">
          <div className="menukanan2product">
            <div className="menukanan2menuproduct1">
              <img
                src="https://www.polygonbikes.com/wp-content/uploads/2018/03/Sarung-Tangan-Sepeda-Polygon-Road-Sigma-Green.png"
                style={{ width: "80%", height: "80%", marginLeft: "26px" }}
              />
              <center>
                <h6 style={{ color: "#2c7873" }}>IDR 128.000</h6>
                <b style={{ fontFamily: "Alata" }}>Gloves Road Sigma</b>
              </center>
            </div>
            <div className="menukanan2menuproduct2">
              <img
                src="https://www.polygonbikes.com/wp-content/uploads/2019/10/pixel-green-right.png"
                style={{ width: "80%", height: "80%", marginLeft: "26px" }}
              />
              <center>
                <h6 style={{ color: "#2c7873" }}>IDR 248.000</h6>
                <b style={{ fontFamily: "Alata" }}>Helmet Pixel</b>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron2;
