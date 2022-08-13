import React,{ useState, useEffect } from "react";
import style from './style.module.css'

function Pagination({charactersPerPage, totalCharacters, paginate, currentPage}) {
    const pageNumbers = []
    let paginationNumbers = [];


    for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++){
        pageNumbers.push(i)
        
    }

    if(pageNumbers) {
        let showMax = 5
        let endPage;
        let startPage;

        if(pageNumbers <= showMax) {
            startPage = 1;
            endPage = pageNumbers.length;
        }
        else {
            startPage = currentPage;

            if(startPage != pageNumbers.length && (startPage + 1) != pageNumbers.length){
                endPage = currentPage + showMax - 1;
            }
            else {  
                endPage = pageNumbers.length
            }
        }

        for(let i = startPage; i <= endPage; i++){
            paginationNumbers.push(i)
        }

    }
    return (
    <div className={style.pagination}>
        <ul className={style.ul}>
            {paginationNumbers.map(number => (
                <li key={number} className={style.li}>
                    <a onClick={() => paginate(number)} href='#' className="a">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    )

}

export default Pagination