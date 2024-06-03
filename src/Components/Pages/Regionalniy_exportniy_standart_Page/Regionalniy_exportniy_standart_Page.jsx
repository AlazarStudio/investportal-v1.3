import React, { useState } from "react";
import classes from './Regionalniy_exportniy_standart_Page.module.css';
import H2 from "../../Standart/H2/H2";
import Text from "../../Standart/Text/Text";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../../Blocks/DocsBlock/DocsBlock";
import Header from "../../Blocks/Header/Header";
import Modal from "../../Blocks/Modal/Modal";

function Regionalniy_exportniy_standart_Page({ children, ...props }) {
    const content = {
        declaration: {
            description: "Региональный экспортный стандарт 2.0 содержит унифицированные подходы по созданию благоприятных условий для экспорта с учетом региональной специфики, что, в свою очередь, позволит комплексно развивать систему поддержки экспорта в субъекте Российской Федерации. Цель Регионального экспортного стандарта 2.0 — закрепить комплекс мер, при внедрении которых региональные власти смогут простимулировать экспортную деятельность компаний, а также сформировать эффективную инфраструктуру поддержки экспорта. Региональный экспортный стандарт 2.0 разработан в соответствии с паспортом федерального проекта «Системные меры развития международной кооперации и экспорта», входящего в состав национального проекта «Международная кооперация и экспорт» в целях совершенствования институциональной экспортной среды в субъектах Российской Федерации и скорректирован по итогам второго года внедрения в 60 субъектах Российской Федерации в 2022 году. Новая редакция Стандарта утверждена протоколом заочного заседания проектного комитета по национальному проекту «Международная кооперация и экспорт» от 2 сентября 2022 года №5.",
            files: [
                { title:'РЭЦ 2.0', name: "REC 2.0", path: "docx" },
                { title:'Региональный экспортный стандарт', name: "Regionalnyj eksportnyj standart", path: "pdf" },
            ],
        },
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (content) => {
        document.body.classList.add('no-scroll');
        setModalContent(content);
        setModalOpen(true);
    };

    // Функция для закрытия модального окна
    const handleCloseModal = () => {
        document.body.classList.remove('no-scroll');
        setModalOpen(false);
        setModalContent('');
    };

    return (
        <>
            <Header/>

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock className="MspWidthBlock">
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Региональный экспортный стандарт
                        </H2>

                        <Text>{content.declaration.description}</Text>

                        <DocsBlock array={content.declaration.files} />

                        <div className={classes.mech}>
                            <div className={classes.mech_item} onClick={() => handleOpenModal('РЕГИОНАЛЬНЫЙ ЭКСПОРТНЫЙ СТАНДАРТ')}>
                                <img src="/play.png" alt="" />
                                смотреть  презентацию
                            </div>
                            <a href="reg prezentation.pdf" target="_blank" className={classes.mech_item}>
                                <img src="/download.png" alt="" />
                                скачать  презентацию
                            </a>
                        </div>

                        {modalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Regionalniy_exportniy_standart_Page;