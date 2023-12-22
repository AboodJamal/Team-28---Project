import React from 'react';
import { Link } from 'react-router-dom';

function HelpingPageNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a
                    href="#"
                    style={{
                        marginLeft: "25px",
                        marginRight: "10px",
                        backgroundColor: '#2C7BE0',
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                    }}
                >
                    <i className="bi bi-megaphone-fill" style={{ color: "white" }}></i>
                </a>
                <div className="d-flex order-lg-2">
                    <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                        <li className="nav-item"
                            style={{
                                marginRight: 4,
                                backgroundColor: '#DADDE1',
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1px 1px",
                            }} >
                            <a className="nav-link" href="#">
                                <i className="bi bi-chat-left-text-fill" style={{ color: "#60656A " }}></i>
                            </a>
                        </li>
                        <li className="nav-item" style={{
                            marginRight: 4,
                            backgroundColor: '#DADDE1',
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1px 1px",
                        }} >
                            <a className="nav-link" href="#">
                                <i className="bi bi-gear-fill" style={{ color: "#60656A " }}></i>
                            </a>
                        </li>
                        <li className="nav-item" style={{
                            marginRight: 4,
                            backgroundColor: '#DADDE1',
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1px 1px",
                        }} >
                            <a className="nav-link" href="#">
                                <i className="bi bi-bell-fill" style={{ color: "#60656A " }}></i>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="profile-image" >
                                <img src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/362262967_1427459524776754_8623404211282031163_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0Sma7m9Y3o0AX-QVxh4&_nc_ht=scontent-ams2-1.xx&oh=00_AfDRJBId9JxVvIP2wRnJ9Q1VyKp63JMMdtICKlJA1hCjcQ&oe=658353FC"
                                    style={{ width: "40px", height: "40px", marginTop: "0px", borderRadius: "6px" }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" style={{ position: 'relative' }}>
                        <button
                            className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                            type="submit"
                        >
                            <i className="bi bi-search fs-5"> </i>
                        </button>
                        <input
                            className="form-control me-2 mt-1 mb-1"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                paddingLeft: "42px",
                                height: "40px",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '12px center',
                            }}
                        />
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "20px", fontWeight: "bold" }}>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: "#717274" }}
                            >
                                Demo
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action 2
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: "#717274" }}
                            >
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <li>
                                    <Link to="/OurEventsPage" className="dropdown-item" >
                                        Events Page
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: "#717274" }}
                            >
                                Account
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action 2
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item" style={{ marginRight: "6px" }}>
                            <a className="nav-link" href="#" style={{ color: "#717274" }}>
                                My Network
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HelpingPageNavBar;
