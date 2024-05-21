import React, { useState } from "react";
import classes from './MP_Region_Page.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import Header from "../../Blocks/Header/Header";
import Button from "../../Standart/Button/Button";
import { Link } from "react-router-dom";

const items = [
    {
        imgSrc: "/mp_4.png",
        title: "Гранты для социальных предпринимателей",
        desc: "Бизнесмены могут получить до 500 тыс. рублей на реализацию проекта. Размер гранта определяется конкурсной комиссией и предоставляется при условии 25% софинансирования со стороны бизнесмена. "
    },
    {
        imgSrc: "/mp_5.png",
        title: "Социальный контракт на осуществление индивидуальной предпринимательской деятельности",
        desc: "Целью оказания государственной социальной помощи на основании социального контракта является выход малоимущих граждан на более высокий уровень жизни "
    },
    {
        imgSrc: "/mp_6.png",
        title: "Субсидии на растениеводство и животноводство",
        desc: "Данная мера поддержки оказывается сельскохозяйственным товаропроизводителям (юридическим лицам или индивидуальным предпринимателям)."
    },
    {
        imgSrc: "/mp_7.png",
        title: "Грант «Агростартап»",
        desc: "Государственная программа развития сельского хозяйства и регулирования рынков сельскохозяйственной продукции, сырья и продовольствия."
    },
    {
        imgSrc: "/mp_8.png",
        title: "Грант «Агротуризм»",
        desc: "Грант на развитие сельского туризма в рамках федерального проекта «Развитие сельского туризма» Государственной программы развития сельского хозяйства."
    },
    {
        imgSrc: "/mp_9.png",
        title: "Грант на развитие семейной фермы",
        desc: "Семейная ферма — крестьянское (фермерское) хозяйство, осуществляющее деятельность, основанную на личном участии главы и членов хозяйства, состоящих в родстве (не менее 2 таких членов, включая главу), продолжительность деятельности которого превышает 24 месяца с даты его регистрации."
    },
    {
        imgSrc: "/mp_10.png",
        title: "Грантовая поддержка на осуществление деятельности в сфере туризма",
        desc: "На принципах софинансирования государство помогает бизнесу реализовывать проекты, направленные на развитие внутреннего туризма. "
    },
    {
        imgSrc: "/mp_11.png",
        title: "Гранты для молодых предпринимателей до 25 лет",
        desc: "Благодаря господдержке граждане до 25 лет, которые решили открыть свое дело, могут получить грант от 100 до 500 тыс. рублей. Средства могут получить как индивидуальные предприниматели, так и учредители предприятий. "
    }
];

function MP_Region_Page({ children, ...props }) {
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
                                    <div className={`${classes.mp_tumbler_item___img____el}`}>
                                        <img src="/mp_federal_logo.png" alt="" />
                                    </div>
                                    <div className={`${classes.mp_tumbler_item___img____el} ${classes.mp_tumbler_item___img____active}`}>
                                        <img src="/MP_region_logo.png" alt="" />
                                    </div>
                                </div>
                                <div className={classes.mp_tumbler_item___title}>
                                    <Link to={'/federalniye_mery_podderjki'} className={`${classes.mp_tumbler_item___title____el}`}>
                                        Федеральные
                                    </Link>
                                    <Link to={'/regionalniye_mery_podderjki'} className={`${classes.mp_tumbler_item___title____el} ${classes.mp_tumbler_item___title____active}`}>
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

export default MP_Region_Page;
