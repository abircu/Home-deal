import Logo from '@/assets/logo/logo-web-homedeal.svg';
const Header = () => {
    return (
        <div className="header white-header" id="header">
            <div className="position-relative">
                <div className="absolute-menu">
                    <div className="container">
                        <div className="market-header">
                            <div>
                                <a href="#" target="_self">
                                    <img src={Logo} alt="logo" />
                                </a>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-none d-lg-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h24v24H0z" />
                                            <path
                                                stroke="#1493C8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.5 10a4.5 4.5 0 009 0m-6-4V2.5a1 1 0 011-1h1a1 1 0 011 1V6h0m-.003-3.294A5.503 5.503 0 0117.5 8v.5h-11V8a5.503 5.503 0 014-5.293M6.5 7.5H6a.5.5 0 000 1h12a.5.5 0 000-1h-.5 0m-11 15v-4m11 0v4m-9-5L12 21l3.5-3.5M12 21v1.5m-8.835.002A9.503 9.503 0 0112 16.5a9.502 9.502 0 018.835 6.002"
                                            />
                                        </g>
                                    </svg>
                                    <span className="sd-ml-0_5">
                                        <strong>700+</strong> aangesloten
                                        vakmensen
                                    </span>
                                </div>
                                <a
                                    className="btn btn-secondary nav-link d-none d-lg-flex sd-ml-2"
                                    href="/nl/companies/"
                                    target="_self"
                                >
                                    Bent u een vakman?
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
