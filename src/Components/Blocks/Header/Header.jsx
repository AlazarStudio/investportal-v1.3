import React, { useState } from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

function Header({ children, ...props }) {
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const menuItems = {
        msp: [
            { to: "/msp", text: "Инфраструктура поддержки бизнеса" },
            { to: "/federalniye_mery_podderjki", text: "Меры поддержки" },
            { to: "/documents_msp", text: "Документы" },
        ],
        export: [
            { to: "/export", text: "Экспорт в КЧР" },
            { to: "/regionalniy_exportniy_standart", text: "Региональный экспортный стандарт" },
            { to: "/documents_export", text: "Документы" },
        ]
    };

    const menuLabels = {
        region: "Регион",
        investor: "Инвестору",
        msp: "МСП",
        export: "Экспорт",
        // documents: "Все документы",
        municipalnye_obrazovaniya: "Муниципальные образования",
        feedback: "Обратная связь"
    };

    return (
        <>
            <div className={classes.header} style={{ position: props.position }}>
                <Link to={"/"} className={classes.header_logo}>
                    <div className={classes.header_logo__img}>
                        <img src="/header_logo.png" alt=""/>
                    </div>
                    <div className={classes.header_logo__title} style={{ color: props.color }}>
                        Инвестиционный портал <br/> Карачаево-Черкесской Республики
                    </div>
                </Link>
                <div className={classes.header_list}>
                    <ul>
                        {Object.keys(menuLabels).map((menu) => (
                            <li
                                key={menu}
                                onMouseEnter={() => handleMouseEnter(menu)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menuItems[menu] ? (
                                    <span className={classes.menuTitle} style={{ color: props.color }}>
                                        {menuLabels[menu]}
                                    </span>
                                ) : (
                                    <Link to={`/${menu}`} style={{ color: props.color }}>
                                        {menuLabels[menu]}
                                    </Link>
                                )}
                                {dropdown === menu && menuItems[menu] && (
                                    <ul className={classes.dropdown}>
                                        {menuItems[menu].map((item) => (
                                            <li key={item.to}>
                                                <Link to={item.to} style={{ color: 'var(--blue_color)' }}>
                                                    {item.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
