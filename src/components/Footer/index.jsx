import Logo from "@/assets/logo/logo-web-homedeal.jpg";
const Footer = () => {
  const mystyle = {
    color: "black",
  };
  return (
    <footer className="market-footer border-top">
      <div className="container">
        <div className="logo sd-mb-1">
          <img
            src={Logo}
            alt="logo"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p className="sd-mb-2 text-black" style={mystyle}>
              Dien een aanvraag in voor een gratis offerte. Wij voorzien u van
              een offerte die het beste bij u past, zodat u tot wel 30% kunt
              besparen.
            </p>
          </div>
        </div>

        <div className="row"></div>
        <hr />
        <div className="footer-bottom-list">
          <div style={mystyle} className="brand">
            &copy; {new Date().getFullYear()} Bouwreyad
          </div>
          {/* <ul className="nav sd-0">
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">Disclaimer</a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">Contact</a>
                        </li>
                    </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
