import img3 from "../../assets/teamwork.jpg";
import img4 from "../../assets/contar.jpg";
import img5 from "../../assets/12.jpg";
import img6 from "../../assets/11.jpg";
import img7 from "../../assets/10.jpg";
import img8 from "../../assets/comp.jpg";
import img1 from "../../assets/img1.jpg";
import team from "../../assets/team.jpg";

import Card from "../../components/Card/Card";
import CardRight from "../../components/Card/cardRight";
import { Container } from "@mui/material";

const About = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        style={{ height: "90vh" }}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " style={{ height: "90vh" }}>
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "90vh" }}>
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "90vh" }}>
            <img src={img8} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <Container >
      {/* <div className="row justify-content-center">
          <h1 className="text-center col-4  py-1 px-sm-1">
            Who We Are
          </h1>
          <br />
          <p className="text-center">   You always had two ways to buy your needs or through an independent
                representative the clinic or by you go down to the companies yourself
                and you can search for your needs and buy them…. Although there is a
                lot of people who are good but unfortunately they invite the doctor
                about the market condition for the new prices and products and also
                there is no clear policy to guarantee your rights as an agent; and if
                you go to the companies yourself we dont need to describe the size of
                the effort that you are going to be hard to take information about the
                products comfortably and clearly And she also meets information that
                is wrong bikodmhalk a salesman is trying to buy only and also
                companies without a replacement or refund policy and fake warranties .
                I will help you in solving all these problems that we would let you go
                to the market but through us ask for any information anytime and know
                the new products and devices through us and buy at the same market
                prices and may be less and our representative will get you quickly and
                with interest for delivery costs explained according to the place of
                your prayers in the fastest time and all of this without a shout Make
                any effort out of your personal life and your clinic only.
           
          </p>
        </div> */}
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12">
              <CardRight
                name="How do we help you?"
                description=" development and production of dental curing light, dental chair
                control system, dental burs, dental led lamp, dental endo products
                and so on of the company. The company has rich experience capable
                sales team and strong manufacturing strength. Since its
                establishment it has been continuously developing new products. In
                the future, we will continue to work hard and innovate constantly.
                We will uphold our mission: Always working for better quality and
                better life! "
                image={team}
              />
            </div>
          </div>
    
        <div className="row justify-content-center ">
          <h2 className="text-center col-3 py-1 px-sm-1">
            Our Team
          </h2>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Card
                name="Mary Doe"
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img5}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Card
                name="John Doe "
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img6}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <CardRight
                name="John Doe "
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img7}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <CardRight
                image={img1}
                name="John Doe "
                description=" Stable and high efficiency sales group are very 
                 communicating skills and rich experience"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
