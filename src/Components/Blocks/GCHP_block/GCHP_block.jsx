import React, { useState } from "react";
import classes from './GCHP_block.module.css';
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import ColumnBlock from "../../Standart/ColumnBlock/ColumnBlock";
import H2 from "../../Standart/H2/H2";
import DocsBlock from "../DocsBlock/DocsBlock";

function GCHP_block({ children, ...props }) {
    const [activeTab, setActiveTab] = useState('gchp');

    const tabs = [
        { id: 'gchp', title: 'Государственно-частное партнерство' },
        { id: 'ki', title: 'Контактная информация' },
        { id: 'mpugchp', title: 'Меры поддержки участников ГЧП' },
        { id: 'rprpgchp', title: 'Рекомендации по реализации проектов ГЧП' },
        { id: 'npakchr', title: 'НПА КЧР' },
        { id: 'nparf', title: 'НПА РФ' },
        { id: 'oivkchr', title: 'Органы исполнительной власти КЧР' },
        { id: 'ps', title: 'Полезные ссылки' },
        { id: 'pgchpks', title: 'ПРОЕКТЫ ГЧП, КС' },
        { id: 'snsmkchr', title: 'Cсылка на сайт Минэк КЧР' },
    ];

    const getContent = (tabId) => {
        const content = {
            gchp: {
                description: "",
                files: [
                    { title: 'Государственно-частное партнерство', name: "Gosudarstvenno-chastnoe partnerstvo", path: "docx" },],
            },
            ki: {
                description: "",
                files: [
                    { title: 'Контактная информация', name: "Kontaktnaya informaciya", path: "pdf" },
                ],
            },
            mpugchp: {
                description: "",
                files: [
                    { title: '23-РЗ О государственном стимулировании инвестиционной деятельности в КЧР', name: "23-RZ O gosudarstvennom stimulirovanii investicionnoj deyatel'nosti v KCHR", path: "docx" },
                ],
            },
            rprpgchp: {
                description: "",
                files: [
                    { title: 'Рекомендации по реализации проектов ГЧП', name: "Rekomendacii po realizacii proektov GCHP", path: "pdf" },
                ],
            },
            npakchr: {
                description: "",
                files: [
                    { title: '19 УГ 155 О порядке согласования ОИВ проектов концесс соглашений', name: "19 UG 155 O poryadke soglasovaniya OIV proektov koncess soglashenij", path: "pdf" },
                    { title: 'Об утверждении порядка принятия решений о заключении гос. контрактов на поставку товаров, соглашений о ГЧП и концессионных соглашений на срок, превышающий срок действия утвержденных лимитов', name: "Ob utverzhdenii poryadka prinyatiya reshenij o zaklyuchenii gos. kontraktov na postavku tovarov, soglashenij o GCHP i koncessionnyh soglashenij na srok, prevyshayushchij srok dejstviya utverzhdennyh limitov", path: "docx" },
                    { title: 'Постановление Правительства Карачаево-Черкесской Республики от 06.12.2017 № 332', name: "Postanovlenie Pravitel'stva Karachaevo-CHerkesskoj Respubliki ot 06.12.2017 № 332", path: "docx" },
                    { title: 'Постановление Правительства КЧР Об определении уполномоченного органа исполнительной власти КЧР', name: "Postanovlenie Pravitel'stva KCHR Ob opredelenii upolnomochennogo organa ispolnitel'noj vlasti KCHR", path: "pdf" },
                    { title: 'РП КЧР 432-р О внесении сведений в систему ГАС Управление', name: "RP KCHR 432-r O vnesenii svedenij v sistemu GAS Upravlenie", path: "pdf" },
                ],
            },
            nparf: {
                description: "",
                files: [
                    { title: '115-ФЗ О концессионных соглашениях', name: "115-FZ O koncessionnyh soglasheniyah", path: "docx" },
                    { title: '224-ФЗ О государственно-частнм партнерстве', name: "224-FZ O gosudarstvenno-chastnm partnerstve", path: "docx" },
                    { title: 'Постановление № 748 от 05.12.2006г', name: "Postanovlenie № 748 ot 05.12.2006g", path: "docx" },
                    { title: 'Постановление № 1309 от 03.12.2015г', name: "Postanovlenie № 1309 ot 03.12.2015g", path: "docx" },
                    { title: 'Постановление № 1322 от 04.12.2015г', name: "Postanovlenie № 1322 ot 04.12.2015g", path: "docx" },
                    { title: 'Постановление № 1366 от 12.12.2015', name: "Postanovlenie № 1366 ot 12.12.2015", path: "docx" },
                    { title: 'Постановление № 1386 от 19.12.2015г', name: "Postanovlenie № 1386 ot 19.12.2015g", path: "docx" },
                    { title: 'Постановление № 1388 от 19.12.2015г', name: "Postanovlenie № 1388 ot 19.12.2015g", path: "docx" },
                    { title: 'Постановление № 1686 от 29.12.2017г', name: "Postanovlenie № 1686 ot 29.12.2017g", path: "docx" },
                    { title: 'ПП РФ от 11.05.2017 № 558', name: "PP RF ot 11.05.2017 № 558", path: "docx" },
                    { title: 'ПП РФ от 15.06.2009 № 495', name: "PP RF ot 15.06.2009 № 495", path: "docx" },
                    { title: 'ПП РФ от 24.04.2014 № 368 Об уверждении правил предоставления антимонополным органом согласия на изменение условий КС', name: "PP RF ot 24.04.2014 № 368 Ob uverzhdenii pravil predostavleniya antimonopolnym organom soglasiya na izmenenie uslovij KS", path: "docx" },
                    { title: 'ПП РФ от 28.01.2021 № 74 О порядке мониторинга реализации концессионных соглашений', name: "PP RF ot 28.01.2021 № 74 O poryadke monitoringa realizacii koncessionnyh soglashenij", path: "docx" },
                    { title: 'ПП РФ от 30.12.2015 № 1490 Об осуществлении публичным партнером контроля за исполнением соглашений ГЧП', name: "PP RF ot 30.12.2015 № 1490 Ob osushchestvlenii publichnym partnerom kontrolya za ispolneniem soglashenij GCHP", path: "docx" },
                    { title: 'ПП РФ от 30.12.2015 № 1514 О порядке проведения уополномоченным органом оценки эфф проекта ГЧП', name: "PP RF ot 30.12.2015 № 1514 O poryadke provedeniya uopolnomochennym organom ocenki eff proekta GCHP", path: "docx" },
                    { title: 'Приказ № 863 от 20.11.2015г', name: "Prikaz № 863 ot 20.11.2015g", path: "docx" },
                    { title: 'Приказ № 864 от 20.11.2015г', name: "Prikaz № 864 ot 20.11.2015g", path: "docx" },
                    { title: 'Приказ № 894 от 30.11.2015г', name: "Prikaz № 894 ot 30.11.2015g", path: "docx" },
                    { title: 'приказ Минэкономразвития РФ № 40 МОНИТОРИНГ РЕАЛИЗАЦИИ СОГЛАШЕНИЙ', name: "prikaz Minekonomrazvitiya RF № 40 MONITORING REALIZACII SOGLASHENIJ", path: "docx" },
                ],
            },
            oivkchr: {
                description: "",
                files: [
                    { title: 'Постановление Правительства Карачаево-Черкесской Республики от 06.12.2017 № 332', name: "Postanovlenie Pravitel'stva Karachaevo-CHerkesskoj Respubliki ot 06.12.2017 № 332", path: "docx" },
                    { title: 'Постановление Правительства КЧР Об определении уполномоченного органа исполнительной власти КЧР', name: "Postanovlenie Pravitel'stva KCHR Ob opredelenii upolnomochennogo organa ispolnitel'noj vlasti KCHR", path: "pdf" },
                    { title: 'ПП КЧР О мерах по реализации 115-ФЗ от 18.05.2022 №135', name: "PP KCHR O merah po realizacii 115-FZ ot 18.05.2022 №135", path: "pdf" },
                ],
            },
            ps: {
                description: "",
                files: [
                    { title: 'полезные ссылки', name: "poleznye ssylki", path: "docx" },
                ],
            },
            pgchpks: {
                description: "",
                files: [
                    { title: 'Об утверждении перечня объектов, которые могут быть переданы в концессию, ГЧП', name: "Ob utverzhdenii perechnya obektov, kotorye mogut byt peredany v koncessiyu, GCHP", path: "pdf" },
                    { title: 'РЕЕСТР ИНИЦИАТИВ ГЧП', name: "REESTR INICIATIV GCHP", path: "pdf" },
                ],
            },
            snsmkchr: {
                description: "",
                files: [
                    { title: 'Ссылка на сайт Минэк КЧР', name: "Ssylka na sajt Minek KCHR", path: "docx" },
                ],
            },
        };

        if (!content[tabId]) return <div>Выберите вкладку</div>;

        const { description, files } = content[tabId];

        return (
            <div className={classes.tabContent}>
                <p>{description}</p>

                <DocsBlock array={files} />
            </div>
        );
    };

    return (
        <>
            <ColumnBlock gap="80px">
                <CenterBlock>
                    <WidthBlock>
                        <H2 text_align='center' text_transform="uppercase" color="var(--blue_color)">Государственно-частное партнерство</H2>

                        <div className={classes.docsTab}>
                            {tabs.map(tab => (
                                <div key={tab.id}
                                    className={`${classes.docsTab_item} ${activeTab === tab.id ? classes.activeTab_item : ''}`}
                                    onClick={() => setActiveTab(tab.id)}>
                                    <div className={classes.docsTab_item__title}>
                                        {tab.title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="docsShowBlock">
                            {getContent(activeTab)}
                        </div>
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
}

export default GCHP_block;