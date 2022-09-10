import loading from '../../assets/images/loading.svg';
import style from './style.module.css';

function Loading() {
    return (
        <div className={style.loading_container}>
            <img className={style.loading_img} src={loading}></img>
        </div>
    );
}

export default Loading;
