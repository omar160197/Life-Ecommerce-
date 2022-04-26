import img2 from "../../assets/img2.jpg";
import styles from "./footer.module.css";
import logo from "../../assets/Logo1.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footerbg}>
        <footer className="container pt-5 sticky-bottom ">
          <div className="row m-0 p-1">
            <div className="col-md-4 col-sm-12">
              <div className="d-flex  align-items-center">
              <img className="w-25  " src={logo} alt="" />
                <h5 className="ms-3">LIFE</h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sequi rem nostrum maxime tenetur! Ipsam autem
                cupiditate, molestias eveniet, incidunt quaerat possimus ullam
                assumenda modi similique ducimus voluptatibus voluptatum itaque?
              </p>
            </div>

            <div className="col-md-2 col-sm-12 mt-5">
              <h5>Support</h5>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2">Help Center</li>
                <li className="nav-item mb-2">My Orders</li>
                <li className="nav-item mb-2">Account Restore</li>
                <li className="nav-item mb-2">Hire an Expert</li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-12 mt-5">
              <h5>About MyOnlineStore</h5>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2">About us</li>
                <li className="nav-item mb-2">Partners</li>
                <li className="nav-item mb-2">Status page</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 mt-5">
              <h5>Contact US</h5>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2 ">
                  <a href="#/" className="nav-link p-0 link-light">
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#/" className="nav-link p-0 link-light">
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#/" className="nav-link p-0 link-light">
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#/" className="nav-link p-0 link-light">
                    <i className="fa-solid fa-location-dot"></i> 123 Great
                    Street Cairo | Egypt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>© 2022 life, All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" href="#/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
