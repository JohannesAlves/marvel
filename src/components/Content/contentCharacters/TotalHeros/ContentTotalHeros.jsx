import style from './style.module.css';

export default function ContentTotalHeros(props) {
    return <h2 className={style.h2}>Total of characters: {props.total} </h2>;
}
