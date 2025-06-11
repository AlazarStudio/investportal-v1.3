import React from "react";
import classes from './DocsBlock.module.css';

function DocsBlock({ children, ...props }) {
    return (
        <>
            <div>
                {props.array.map((file, index) => (
                    <div key={index} className={classes.docBlock}>
                        <div className={classes.tabContentInfoElement}>
                            <img src={`/${file.path}.svg`} alt="document icon" />
                            <div className={classes.tabContentInfoElementLine}></div>
                            {file.title}
                        </div>
                        <a href={`/${file.name}.${file.path}`} target="_blank">Скачать</a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DocsBlock;

// import React from "react";
// import classes from './DocsBlock.module.css';
// import uploadsConfig from "../../../uploadsConfig";

// function DocsBlock({ children, ...props }) {
//     // console.log(props);
    
//     return (
//         <>
//             <div>
//                 {props.array.map((file, index) => (
//                     <div key={index} className={classes.docBlock}>
//                         {console.log(file)}
//                         <div className={classes.tabContentInfoElement}>
//                             <img src={`/${file.src.endsWith('.pdf')
// 						? 'pdf'
// 						: file.src.endsWith('.docx')
// 							? 'docx'
// 							: file.src.endsWith('.doc')
// 								? 'docx'
// 								: file.src.endsWith('.rtf')
// 									? 'docx'
// 									: 'docx'}.svg`} alt="document icon" />
//                             <div className={classes.tabContentInfoElementLine}></div>
//                             {file.title}
//                         </div>
//                         <a href={`${uploadsConfig}${file.src}`} target="_blank">Скачать</a>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default DocsBlock;

