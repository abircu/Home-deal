import homeLogo from "../../assets/logo/home-logo-v2.png";
const Header = () => {
  return (
    <div className="header white-header" id="header">
      <div className="position-relative">
        <div className="absolute-menu">
          <div className="container">
            <div className="market-header">
              <div>
                <a href="#" target="_self">
                  <img
                    src={homeLogo}
                    alt="logo"
                    className="img-fluid"
                    style={{
                      width: "170px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
