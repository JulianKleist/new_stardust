import React from "react";
import "./company.css";
const imgData = [
  {
    id: "6",
    imgUrl: "/assets/clientes/chicco.png",
  },
  {
    id: "7",
    imgUrl: "/assets/clientes/dji.png",
  },
  {
    id: "1",
    imgUrl: "/assets/clientes/bialetti.png",
  },
  {
    id: "5",
    imgUrl: "/assets/clientes/shure.png",
  },
  {
    id: "8",
    imgUrl: "/assets/clientes/pioneerdj.png",
  },
  {
    id: "9",
    imgUrl: "/assets/clientes/dazzler.png",
  },
  {
    id: "2",
    imgUrl: "/assets/clientes/denon.png",
  },
  {
    id: "3",
    imgUrl: "/assets/clientes/lactolanda.png",
  },
  {
    id: "4",
    imgUrl: "/assets/clientes/landerfit.png",
  },
  {
    id: "6",
    imgUrl: "/assets/clientes/sis.png",
  },
];

class Company extends React.Component {
  render() {
    return (
      <div className="mx-md-5">
        <div className="row px-sm-5 mx-5 d-flex justify-content-center">
          {imgData.map((item) => (
            <div className="my-3 col-6 col-sm-4 col-lg-3 col-xl-3">
              <img
                width="120px"
                src={item.imgUrl}
                data-aos="fade-in"
                data-aos-duration="2000"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Company;
