import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {exitLogin} from "../../store/authorizationSlice";

function Navbar(){
    const loginAuthState = useSelector(state => state.authorization.loginAuth);
    const dispatch = useDispatch();
    const exitLoginBtn = () => {
        dispatch(exitLogin())
    }

    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="panel">
                    <ul className="panelFlex">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" aria-current="page">О нас</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Аренда</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/delivery" className="nav-link">Доставка</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ride" className="nav-link">Где кататься</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Контакты</Link>
                        </li>
                        <li className="nav-item telBtn2 px-2">
                            <a className="nav-link btn btn-outline-primary text-primary rounded-pill btn_contact" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalContact">Обратный звонок</a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-dark p-2">
                <div className="dflex">
                    <div>
                        <Link to="/">
                        <img src="https://bikepark.ae/local/templates/bike_template/img/logo.svg" className="logo"/>
                        </Link>
                    </div>
                </div>
                <div className="d-flex">
                    <ul className="nav justify-content-end">
                        <li className="nav-item text">
                            <Link to="/about" className="nav-link active" aria-current="page">О нас</Link>
                        </li>
                        <li className="nav-item text">
                            <Link to="/" className="nav-link" >Аренда</Link>
                        </li>
                        <li className="nav-item text">
                            <Link to="/delivery" className="nav-link">Доставка</Link>
                        </li>
                        <li className="nav-item text">
                            <Link to="/ride" className="nav-link">Где кататься</Link>
                        </li>
                        <li className="nav-item text">
                            <Link to="/contact" className="nav-link">Контакты</Link>
                        </li>
                        <li className="nav-item text">
                            <a className="nav-link telBlock" href="#" id="tel-num">+996 707 58 47 99</a>
                        </li>
                        <li className="nav-item">
                            {loginAuthState ?
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                             className="bi bi-person-rolodex" viewBox="0 0 16 16">
                                            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                            <path
                                                d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                                        </svg>
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><Link to="/personal" className="dropdown-item">Личный кабинет</Link></li>
                                        <li onClick={exitLoginBtn}><Link className="dropdown-item" href="#">Выйти</Link></li>
                                    </ul>
                                </div>
                                :
                                <a className="nav-link" href="#" id="tel-num" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                         className="bi bi-person-rolodex" viewBox="0 0 16 16">
                                        <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        <path
                                            d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                                    </svg>
                                </a>
                            }
                        </li>
                        <li className="nav-item telBtn">
                            <span className="nav-link btn btn-outline-primary rounded-pill btn_contact" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalContact">Обратный звонок</span>
                        </li>
                        <li className="nav-item time">
                            <b className="nav-link text-dark" href="#">21:10</b>
                        </li>
                    </ul>
                        <button className="navbar-toggler mx-2 text-dark btnBlock " type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;