import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faEnvelopeOpenText,
    faHome,
    faNewspaper,
    faUserFriends,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

import n from './navbar.module.css';

const Navbar = () => {

    const {
        link,
        item,
        icon,
        items,
        navbar,
        itemText,
    } = n;

    return (
        <aside className={navbar}>
            <ul className={items}>
                <li className={item}>
                    <a
                        className={link}
                        href="/#"
                    >
                        <FontAwesomeIcon icon={faHome} className={ icon }/>
                        <span className={ itemText }>
                            My Page
                        </span>
                    </a>
                </li>
                <li className={item}>
                    <a
                        className={link}
                        href="/"
                    >
                        <FontAwesomeIcon icon={faNewspaper} className={ icon }/>
                        <span className={ itemText }>
                            News
                        </span>
                    </a>
                </li>
                <li className={item}>
                    <a
                        className={link}
                        href="/"
                    >
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className={ icon }/>
                        <span className={ itemText }>
                            Messages
                        </span>
                    </a>
                </li>
                <li className={item}>
                    <a
                        className={link}
                        href="/"
                    >
                        <FontAwesomeIcon icon={faUserFriends} className={ icon }/>
                        <span className={ itemText }>
                            Friends
                        </span>
                    </a>
                </li>
                <li className={item}>
                    <a
                        className={link}
                        href="/"
                    >
                        <FontAwesomeIcon icon={faCamera} className={ icon }/>
                        <span className={ itemText }>
                            Photos
                        </span>
                    </a>
                </li>
                <li className={item}>
                    <a
                        className={link}
                        href="/"
                    >
                        <FontAwesomeIcon icon={faUsers} className={ icon }/>
                        <span className={ itemText }>
                            Communities
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    )
};

export default Navbar;
