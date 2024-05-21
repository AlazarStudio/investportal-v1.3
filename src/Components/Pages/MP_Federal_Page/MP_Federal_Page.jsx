import React, { useState } from "react";
import classes from './MP_Federal_Page.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import Header from "../../Blocks/Header/Header";
import Button from "../../Standart/Button/Button";
import { Link } from "react-router-dom";

const items = [
    {
        imgSrc: "/mp_1.png",
        title: "Поддержка малого и среднего бизнеса от Минэкономразвития и Яндекс Бизнеса",
        desc: "Малый и средний бизнес сможет удвоить бюджет на продвижение на платформе VK Реклама. Пилотный проект уже успешно завершился в нескольких регионах."
    },
    {
        imgSrc: "/mp_2.png",
        title: "Программы льготного кредитования малого и среднего бизнеса",
        desc: "Нужна помощь в поиске людей на свой проект? Воспользуйтесь услугой бесплатного поиска сотрудников на hh.ru с помощью новой меры поддержки."
    },
    {
        imgSrc: "/mp_3.png",
        title: "Цифровой профиль предпринимателя",
        desc: "Это упрощенный доступ к мерам государственной поддержки и проактивный подбор региональных и федеральных программ и услуг."
    }
];

function MP_Federal_Page({ children, ...props }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Меры поддержки для предпринимателей
                            Карачаево-Черкесской республики
                        </H2>
                    </WidthBlock>

                    <div className={classes.mp_tumbler}>
                        <CenterBlock>
                            <div className={classes.mp_tumbler__item}>
                                <div className={classes.mp_tumbler_item___img}>
                                    <div className={`${classes.mp_tumbler_item___img____el} ${classes.mp_tumbler_item___img____active}`}>
                                        <img src="/mp_federal_logo.png" alt="" />
                                    </div>
                                    <div className={`${classes.mp_tumbler_item___img____el}`}>
                                        <img src="/MP_region_logo.png" alt="" />
                                    </div>
                                </div>
                                <div className={classes.mp_tumbler_item___title}>
                                    <Link to={'/federalniye_mery_podderjki'} className={`${classes.mp_tumbler_item___title____el} ${classes.mp_tumbler_item___title____active}`}>
                                        Федеральные
                                    </Link>
                                    <Link to={'/regionalniye_mery_podderjki'}  className={`${classes.mp_tumbler_item___title____el}`}>
                                        Региональные
                                    </Link>
                                </div>
                            </div>
                        </CenterBlock>
                    </div>

                    <WidthBlock>
                        <div className={classes.mp_data}>
                            <div className={classes.mp_data_search}>
                                <input type="text" placeholder="Найти" value={searchTerm} onChange={handleSearch} />
                            </div>

                            <div className={classes.mp_data__items}>
                                {filteredItems.map((item, index) => (
                                    <div className={classes.mp_data__items___el} key={index}>
                                        <div className={classes.mp_data__items___el____img}>
                                            <img src={item.imgSrc} alt="" />
                                        </div>

                                        <div className={classes.mp_data__items___el____bottom}>
                                            <div className={classes.mp_data__items___el____bottom______title}>
                                                {item.title}
                                            </div>
                                            <div className={classes.mp_data__items___el____bottom______desc}>
                                                {item.desc}
                                            </div>
                                            <Button width={'310px'}>
                                                Узнать больше
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock >
        </>
    );
}

export default MP_Federal_Page;
