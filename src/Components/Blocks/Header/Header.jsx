import React from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

function Header({ children, ...props }) {
    return (
        <>
            <div className={classes.header} style={{position: props.position}}>
                <Link to={"/"} className={classes.header_logo}>
                    <div className={classes.header_logo__img}>
                        <img src="/header_logo.png" alt="" />
                    </div>
                    <div className={classes.header_logo__title} style={{ color: props.color }}>
                        Инвестиционный портал <br /> Карачаево-Черкесской Республики
                    </div>
                </Link>
                <div className={classes.header_list}>
                    <ul>
                        <li><Link to="/region" style={{ color: props.color }}>Регион</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>Инвестору</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>МСП</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>Экспорт</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>Все документы</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>Муниципальные образования</Link></li>
                        <li><Link to="/" style={{ color: props.color }}>Обратная связь</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;