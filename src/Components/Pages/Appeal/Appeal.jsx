import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import classes from './Appeal.module.css';

import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import Header from "../../Blocks/Header/Header";


function Appeal({ children, ...props }) {
    const [form, setForm] = useState({
        fio: '',
        phone: '',
        email: '',
        subject: '',
        orgName: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/php/send_mail.php', new URLSearchParams(form));
            alert(response.data);
            setForm({
                fio: '',
                phone: '',
                email: '',
                subject: '',
                orgName: '',
                comment: ''
              });
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            alert('Произошла ошибка при отправке сообщения.');
        }
    };
    return (
        <>
            <Header />

            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Обращение в инвестиционный совет</H2>

                        <CenterBlock>
                            <form onSubmit={handleSubmit} className={classes.formFeedback}>

                                <input type="text" placeholder="ФИО*" name="fio" value={form.fio} onChange={handleChange} required />

                                <input type="tel" placeholder="Телефон*" name="phone" value={form.phone} onChange={handleChange} required />

                                <input type="email" placeholder="E-mail*" name="email" value={form.email} onChange={handleChange} required />

                                <input type="text" placeholder="Название организации*" name="orgName" value={form.orgName} onChange={handleChange} />

                                <textarea name="comment" placeholder="Комментарий" value={form.comment} onChange={handleChange}></textarea>

                                <div className={classes.formFeedback_check}>
                                    <label>
                                        <input type="checkbox" required />
                                        <div>
                                            Отправляя форму, я даю согласие на обработку персональных данных, подтверждаю согласие с политикой конфиденциальности и условиями догов-оферты на оказание комлексных услуг, а также на получение информационных рассылок от проекта и партнеров проекта.
                                        </div>
                                    </label>
                                </div>

                                <button type="submit">Отправить</button>
                            </form>
                        </CenterBlock>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>

        </>
    );
}

export default Appeal;