import React from 'react';

function CustomNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a
                    href="#"
                    style={{
                        marginLeft: "25px",
                        marginRight: "17px",
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
                        <button className="btn" type="submit" style={{ marginRight: "-42px", zIndex: "1" }}>
                            <i className="bi bi-search"></i>
                        </button>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                paddingLeft: "42px", // Make space for the icon
                                height: "40px",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '12px center', // Adjust position of the icon
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
                        <li className="nav-item" style={{
                            marginLeft: "3px",
                            marginRight: "10px",
                            backgroundColor: '#DADDE1',
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1px 6px",
                        }} >
                            <a className="nav-link" href="#">
                                <i class="bi bi-chat-left-text-fill" style={{ color: "#60656A " }}></i>
                            </a>
                        </li>
                        <li className="nav-item" style={{
                            marginLeft: "3px",
                            marginRight: "10px",
                            backgroundColor: '#DADDE1',
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1px 6px",
                        }} >
                            <a className="nav-link" href="#">
                                <i class="bi bi-gear-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={{
                            marginLeft: "3px",
                            marginRight: "10px",
                            backgroundColor: '#DADDE1',
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1px 6px",
                        }} >
                            <a className="nav-link" href="#">
                                <i class="bi bi-bell-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="#" className="profile-image" >
                                <img src="https://scontent.ffjr1-1.fna.fbcdn.net/v/t39.30808-6/362262967_1427459524776754_8623404211282031163_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=6--sSopn4H4AX_CD5FS&_nc_ht=scontent.ffjr1-1.fna&oh=00_AfANUBwFZPS5Sw5gJSGJO85phx1pkIVAfbQLB23UGxfGkw&oe=657B6AFC"
                                    style={{ width: "40px", height: "40px", marginTop: "0px", borderRadius: "6px" }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default CustomNavbar;
