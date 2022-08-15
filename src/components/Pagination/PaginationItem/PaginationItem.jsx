import style from './style.module.css';

export default function PaginationItem({
  number,
  isCurrentPage = false,
  paginate,
}) {
  return (
    <li key={number} className={style.li}>
      <a onClick={() => paginate(number)} href="#" className={style.a}>
        {number}
      </a>
    </li>
  );
}
