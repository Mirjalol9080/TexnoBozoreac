import React from "react";
import SearchIcon from "../../public/images/icons/search-icon";
import HeaderLogo from "../../public/images/logo/header-logo";
import BottomIcon from "../../public/images/icons/bottom-icon";
import CompareIcon from "../../public/images/icons/compare-icon";
import HeartIcon from "../../public/images/icons/heart-icon";
import CardIcon from "../../public/images/icons/Card-icon";
import BottomblackIcon from "../../public/images/icons/bottom-black-icon";

import { header } from "../data";
import HeaderLink from "./Header-Link";

function Header() {
    return (
        <section className="header-top">
            <div className="container">
                <div className="header-row">
                    <div className="header-left">
                        <a href="#" className="header-logo">
                            <HeaderLogo />
                        </a>
                        <select className="header-lang">
                            <option>UZ</option>
                            <option>RU</option>
                        </select>
                    </div>
                    <div className="header-main">
                        <button className="header-katalog__btn">
                            <p>Barcha kategoriyalar</p>
                            <BottomIcon />
                        </button>
                        <label className="header-search">
                            <input
                                type="text"
                                className="header-input"
                                placeholder="Search.."
                            />
                            <button className="header-search__btn">
                                <SearchIcon />
                            </button>
                        </label>
                    </div>
                    <div className="header-right">
                        <button className="header-compare__button">
                            <CompareIcon />
                            <p>Solishtirish</p>
                        </button>
                        <button className="header-btn">
                            <HeartIcon />
                        </button>
                        <button className="header-btn">
                            <CardIcon />
                        </button>
                        <button className="login-button">KIRISH</button>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom__row">
                        <select className="header-bottom__select">
                            <option>Kampyuterlar</option>
                        </select>
                        <select className="header-bottom__select">
                            <option>Telefonlar</option>
                        </select>
                        <select className="header-bottom__select">
                            <option>Aksessuarlar</option>
                        </select>
                        <select className="header-bottom__select">
                            <option>Akustika</option>
                        </select>
                        {header.map(item => (
                            <HeaderLink
                                key={item.id}
                                title={item.title}
                                path={item.path}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
