import Logo from '@/assets/logo/logo-web-homedeal.svg';
const Footer = () => {
    return (
        <footer className="market-footer border-top">
            <div className="container">
                <div className="logo sd-mb-1">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="sd-mb-2">
                            Dien een aanvraag in voor gratis offertes. Vergelijk
                            vervolgens tot 5 bedrijven, kies de offerte die het
                            beste bij u past en bespaar tot wel 40%.
                        </p>
                    </div>
                </div>

                <div className="row"></div>
                <hr />
                <div className="footer-bottom-list">
                    <div className="brand">&copy; 2024 Homedeal</div>
                    <ul className="nav sd-0">
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">
                                Disclaimer
                            </a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">
                                Cookies
                            </a>
                        </li>
                        <li>
                            <span className="separator">&nbsp;|&nbsp;</span>
                            <a href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
