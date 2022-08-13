import React,{ useState, useEffect } from "react";
import style from './style.module.css'

function Pagination({charactersPerPage, totalCharacters, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className={style.pagination}>
            <ul className={style.ul}>
                {pageNumbers.map(number => (
                    <li key={number} className={style.pagination}>
                        <a onClick={() => paginate(number)} href='#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
 
}

export default Pagination