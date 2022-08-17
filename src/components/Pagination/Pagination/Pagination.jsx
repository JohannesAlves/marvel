import PaginationItem from '../PaginationItem/PaginationItem';
import style from './style.module.css';

function Pagination({
    itensPerPage,
    totalItens,
    paginate,
    currentPage,
    search,
}) {
    const lastPage = Math.floor(totalItens / itensPerPage);
    const prevPages =
        currentPage > 1
            ? [...new Array(currentPage > 3 ? 3 : currentPage - 1)]
                  .map((_, index) => currentPage - index - 1)
                  .reverse()
            : [];

    const nextPages =
        lastPage - 3 < currentPage
            ? []
            : [...new Array(4)].map((_, index) => currentPage + index + 1);

    // se o tamanho do search for maior do que 0 ele terá que zerar o estado atual do currentPage para 1 novamente

    return (
        <div className={style.pagination}>
            <ul className={style.ul}>
                {prevPages.map(number => (
                    <PaginationItem number={number} paginate={paginate} />
                ))}

                <div className={style.currentPage}>
                    <PaginationItem
                        number={currentPage}
                        isCurrentPage={true}
                        paginate={paginate}
                    />
                </div>

                {nextPages.map(number => (
                    <PaginationItem number={number} paginate={paginate} />
                ))}
            </ul>
        </div>
    );
}

export default Pagination;
