import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BlockWidth from "../Standart/WidthBlock/WidthBlock.jsx";

import SliderNews from "../ui/Sliders/SliderNews/SliderNews.jsx";

import { getProjects } from "../GetData/GetData.js"
import CenterBlock from "../Standart/CenterBlock/CenterBlock.jsx";
import LeftTitle from "../Blocks/leftTitle/LeftTitle.jsx";
import InfoBlock from "../Blocks/InfoBlock/InfoBlock.jsx";
import Header from "../Blocks/Header/Header.jsx";
import WidthBlock from "../Standart/WidthBlock/WidthBlock.jsx";
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock.jsx";
import Non_Found_Page from "./Non_Found_Page.jsx";


const Projects_One_Page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let { title } = useParams();

    let project = getProjects();

    const foundItems = project.filter(item => item.link.replace(/\s+/g, "_") === title);

    const navigate = useNavigate();

    if (foundItems.length === 0) {
        navigate('/');
        return (
            <>
                <Non_Found_Page />
            </>
        );
    }

    return (
        <>
            <Header />

            <ColumnBlock gap={'80px'}>
                <CenterBlock>
                    <LeftTitle center={"true"} color="var(--blue-color)">{foundItems[0].title}</LeftTitle>
                </CenterBlock>

                {foundItems[0].img != '' && <div className="projectSlider">
                    <CenterBlock>
                        <WidthBlock>
                            <SliderNews slides={foundItems[0].img} />
                        </WidthBlock>
                    </CenterBlock>
                </div>
                }

                <CenterBlock>
                    <WidthBlock>
                        <InfoBlock
                            title={foundItems[0].text}
                            num={""}
                            text={""}
                            backgroundColor="#fff"
                            border={""}
                            color={"#000000"}
                            padding={"40px"}
                            width={"100%"}
                            textAlign={'left'}
                        />
                    </WidthBlock>
                </CenterBlock>
            </ColumnBlock>
        </>
    );
};

export default Projects_One_Page;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// import SliderNews from "../ui/Sliders/SliderNews/SliderNews.jsx";

// import CenterBlock from "../Standart/CenterBlock/CenterBlock.jsx";
// import LeftTitle from "../Blocks/leftTitle/LeftTitle.jsx";
// import InfoBlock from "../Blocks/InfoBlock/InfoBlock.jsx";
// import Header from "../Blocks/Header/Header.jsx";
// import WidthBlock from "../Standart/WidthBlock/WidthBlock.jsx";
// import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock.jsx";
// import serverConfig from "../../serverConfig.js";
// import axios from "axios";


// const Projects_One_Page = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     let { title } = useParams();

//     const [project, setProject] = useState()
    

//     useEffect(() => {
// 		const fetchProduct = async () => {
// 			try {
// 				const response = await axios.get(`${serverConfig}/projects/${title}`)
// 				// console.log(response.data)
// 				setProject(response.data)
// 			} catch (error) {
// 				console.error('Error fetching product:', error)
// 			}
// 		}
// 		fetchProduct()

// 	}, [])


//     return (
//         <>
//             <Header />

//             <ColumnBlock gap={'80px'}>
//                 <CenterBlock>
//                     <LeftTitle center={"true"} color="var(--blue-color)">{project?.title}</LeftTitle>
//                 </CenterBlock>

//                 {project?.images != [] && <div className="projectSlider">
//                     <CenterBlock>
//                         <WidthBlock>
//                             <SliderNews slides={project?.images} />
//                         </WidthBlock>
//                     </CenterBlock>
//                 </div>
//                 }

//                 <CenterBlock>
//                     <WidthBlock>
//                         <InfoBlock
//                             title={project?.text}
//                             num={""}
//                             text={""}
//                             backgroundColor="#fff"
//                             border={""}
//                             color={"#000000"}
//                             padding={"40px"}
//                             width={"100%"}
//                             textAlign={'left'}
//                         />
//                     </WidthBlock>
//                 </CenterBlock>
//             </ColumnBlock>
//         </>
//     );
// };

// export default Projects_One_Page;
