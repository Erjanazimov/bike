import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="fons_footer">
            <div className="container-global">
                <div className="footer_flex pt-5 pb-5">
                <div>
                    <ul className="footer_li">
                        <li className="text-white font-bold fs-5 pb-2">Аренда велосипедов</li>
                        <li> <a href="#">Алюминий </a></li>
                        <li> <a href="#">Карбон</a></li>
                        <li> <a href="#">Горные/городские</a></li>
                        <li> <a href="#">Городские эконом</a></li>
                        <li className="text-white fs-5 pt-2">© BikePark, 2021</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer_li d-flex flex-wrap li_right">
                        <li>
                            <Link to="/delivery">Правила</Link>
                        </li>
                        <li>
                            <Link to="/about" >Отзывы</Link>
                        </li>
                        <li>
                            <Link to="/contact">Контакты</Link>
                        </li>
                        <li>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModalContact">Обратная связь</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;