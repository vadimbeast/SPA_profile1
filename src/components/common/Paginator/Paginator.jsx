import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged,  portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    /*let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);*/

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 && 
            <button onClick={ () => { setPortionNumber(portionNumber - 1) }}>Prew</button>
            }

            { pages 
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={ cn({
                        [styles.selectPage]: currentPage === p 
                    }, styles.pageNumber) }
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                })}

            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
            }
        </div>
    );
}    


export default Paginator;