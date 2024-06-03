import React, {useState} from "react";
import classes from './Mech_project_block.module.css';
import H2 from "../../Standart/H2/H2";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import DocsBlock from "../DocsBlock/DocsBlock";
import Modal from "../Modal/Modal";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function Mech_project_block({ children, ...props }) {
    const content = {
        declaration: {
            description: "",
            files: [
                { title:'Инструменты государственной поддержки инвесторов', name: "Instrumenty gosudarstvennoj podderzhki investorov", path: "docx" },
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
            <ColumnBlock className="InvestorColumnBlock" gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">
                            Действующие механизмы государственного стимулирования инвестиционной деятельности
                        </H2>

                        <div className={classes.mech}>
                            <div className={classes.mech_item} onClick={() => handleOpenModal('ДЕЙСТВУЮЩИЕ МЕХАНИЗМЫ ГОСУДАРСТВЕННОГО СТИМУЛИРОВАНИЯ ИНВЕСТИЦИОННОЙ ДЕЯТЕЛЬНОСТИ')}>
                                <img src="/play.png" alt="" />
                                смотреть  презентацию
                            </div>
                            <a href="/dmgsid.pdf" target="_blank" className={classes.mech_item}>
                                <img src="/download.png" alt="" />
                                скачать  презентацию
                            </a>
                        </div>

                        {modalOpen && <Modal content={modalContent} onClose={handleCloseModal} />}

                        <DocsBlock array={content.declaration.files} />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default Mech_project_block;