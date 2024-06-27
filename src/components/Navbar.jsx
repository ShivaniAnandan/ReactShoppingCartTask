import React from 'react';
const Navbar = ({ cartCount }) => {
    return (
        <div>
            {/* <h1>Navbar Component</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-around">
                    <div className='left d-flex '>
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">All Products</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Popular items</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                        </div>
                        <button className="btn border-dark">
                        <svg style={{marginRight:"10"}} version="1.1" viewBox="0 0 2048 2048" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(0)" fill="#000000" d="m0 0h339l18 40 19 42 16 36 16 35 13 29 9 20v2h1518l21 2 18 5 16 8 11 8 10 9 10 14 8 17 4 13v4h2v49h-2l-5 10-8 10-7 10-16 29-13 23-6 11-13 24-9 16-12 21-6 11-14 26-30 54-16 29-25 45-13 23-6 11-13 24-13 23-13 24-13 23-13 24-13 23-32 58-15 27-13 23-6 11-13 24-13 23-13 24-14 24-10 14-11 13-12 12-17 13-13 8-16 8-18 7-23 6-18 3-30 2h-578l-177 1-16 31-12 22-15 29-12 22-13 25-10 19-8 14-4 9-1 11 3 10 4 5 5 3 10 2 1185 1 1 1v203l-1 1h-1241l-21-2-22-5-21-7-27-14-14-9-22-18-6-5-9-11-12-14-9-14-14-26-7-19-5-19-3-17-1-9v-27l3-24 5-24 10-36 5-13 16-27 15-26 14-24 17-29 15-26 13-22 15-26 12-20 15-26 7-12-1-7-14-29-13-28-15-31-13-28-14-29-13-28-13-27-13-28-15-31-13-28-15-31-13-28-13-27-13-28-14-29-13-28-15-31-9-20-8-16-18-38-10-22-8-16-18-38-10-22-8-16-16-34-12-26-8-16-8-18-1-1-204-1z" />
                            <path transform="translate(598,1638)" fill="#000000" d="m0 0h32l17 2 19 4 16 5 17 7 24 13 14 10 13 11 8 7 8 8 9 11 10 13 14 25 7 15 7 21 4 18 2 13 1 15v12l-1 17-5 27-6 20-8 18-9 17-9 14-8 10-11 13-12 12-10 8-13 10-24 13-14 7-24 8-25 6h-53l-36-9-18-7-23-12-14-9-22-18-6-5-9-11-12-14-9-14-14-26-7-19-5-19-3-17-1-9v-31l3-23 6-23 7-19 16-30 9-12 9-11 11-13 9-8 14-11 11-8 22-12 14-7 18-6 23-5z" />
                            <path transform="translate(1622,1638)" fill="#000000" d="m0 0h32l23 3 17 4 18 6 17 8 21 12 12 9 17 14 11 11 9 11 10 13 14 25 7 15 7 21 4 18 2 13 1 15v12l-1 17-5 27-6 20-8 18-9 17-9 14-13 16-9 11-8 7-11 9-13 10-24 13-14 7-24 8-25 6h-53l-36-9-18-7-23-12-14-9-22-18-6-5-9-11-12-14-9-14-14-26-7-19-5-19-3-17-1-9v-31l3-23 6-23 7-19 16-30 9-12 9-11 11-13 8-7 11-9 13-10 24-13 14-7 18-6 17-4z" />
                            <path transform="translate(2047,280)" fill="#000000" d="m0 0" />
                            <path transform="translate(1606,2047)" fill="#000000" d="m0 0 2 1z" />
                            <path transform="translate(582,2047)" fill="#000000" d="m0 0 2 1z" />
                        </svg>
                        
                        Cart <span className='badge bg-dark text-white ms-1 rounded-pill'>{ cartCount }</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;