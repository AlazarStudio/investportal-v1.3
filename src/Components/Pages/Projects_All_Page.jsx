import React, { useEffect, useState } from "react";

import SlideBlock from "../Blocks/SlideBlock/SlideBlock.jsx";

import BlockWidth from "../Standart/WidthBlock/WidthBlock.jsx";
import { getProjects } from "../GetData/GetData.js"
import CenterBlock from "../Standart/CenterBlock/CenterBlock.jsx";
import LeftTitle from "../Blocks/leftTitle/LeftTitle.jsx";
import Header from "../Blocks/Header/Header.jsx";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock.jsx";
import Button from "../Standart/Button/Button.jsx";

const Projects_All_Page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let projects = getProjects();

    const [type, setType] = useState('completed');
    const filteredProjects = projects.filter(project => project.type === type);

    return (
        <>
            <Header />

            <ColumnBlock gap={'80px'}>
                <CenterBlock>
                    <LeftTitle center={"true"} color="var(--blueColor)">Реализованные и реализуемые проекты</LeftTitle>
                </CenterBlock>

                <CenterBlock>
                    <BlockWidth style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: '20px'
                    }}>
                        <Button width='410px' onClick={() => setType('completed')} isActive={type === 'completed'}>Реализованные проекты</Button>
                        <Button width='410px' onClick={() => setType('ongoing')} isActive={type === 'ongoing'}>Реализуемые проекты</Button>
                    </BlockWidth>
                </CenterBlock>

                <CenterBlock>
                    <BlockWidth wrap={"wrap"} gap={'50px'}>
                        {filteredProjects.map((item, index) => (
                            <SlideBlock
                                key={index}
                                img={`${item.img[0]}`}
                                title={item.title}
                                link={item.link}
                                text={item.text}
                            />
                        ))}
                    </BlockWidth>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
};

export default Projects_All_Page;


// import React, { useEffect, useState } from "react";

// import SlideBlock from "../Blocks/SlideBlock/SlideBlock.jsx";

// import BlockWidth from "../Standart/WidthBlock/WidthBlock.jsx";
// import { getProjects } from "../GetData/GetData.js"
// import CenterBlock from "../Standart/CenterBlock/CenterBlock.jsx";
// import LeftTitle from "../Blocks/leftTitle/LeftTitle.jsx";
// import Header from "../Blocks/Header/Header.jsx";
// import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock.jsx";
// import Button from "../Standart/Button/Button.jsx";
// import axios from "axios";
// import serverConfig from "../../serverConfig.js";
// import getToken from "../../getToken.js";

// const fetchProjects = async () => {
// 	try {
// 		const response = await axios.get(`${serverConfig}/projects`)
// 		return response.data
// 	} catch (error) {
// 		console.error('Error fetching contractors:', error)
// 		return []
// 	}
// }

// const Projects_All_Page = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const [projects, setProjects] = useState([])

//     useEffect(() => {
//         const getProjects = async () => {
//             const projects = await fetchProjects()
//             setProjects(projects)
//         }
//         getProjects()
//     }, [])

//     // console.log(projects);
    

//     // let projects = getProjects();

//     const [type, setType] = useState('completed');
//     const filteredProjects = projects.filter(project => project?.type === type);

//     return (
//         <>
//             <Header />

//             <ColumnBlock gap={'80px'}>
//                 <CenterBlock>
//                     <LeftTitle center={"true"} color="var(--blueColor)">Реализованные и реализуемые проекты</LeftTitle>
//                 </CenterBlock>

//                 <CenterBlock>
//                     <BlockWidth style={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         flexDirection: 'row',
//                         gap: '20px'
//                     }}>
//                         <Button width='410px' onClick={() => setType('completed')} isActive={type === 'completed'}>Реализованные проекты</Button>
//                         <Button width='410px' onClick={() => setType('ongoing')} isActive={type === 'ongoing'}>Реализуемые проекты</Button>
//                     </BlockWidth>
//                 </CenterBlock>

//                 <CenterBlock>
//                     <BlockWidth wrap={"wrap"} gap={'50px'}>
//                         {filteredProjects.map((item, index) => (
//                             <SlideBlock
//                                 key={index}
//                                 img={item.images?.[0] ?? null}
//                                 title={item.title}
//                                 link={item.id}
//                                 text={item.text}
//                             />
//                         ))}
//                     </BlockWidth>
//                 </CenterBlock>
//             </ColumnBlock>
//         </>
//     );
// };

// export default Projects_All_Page;


