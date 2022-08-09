import ArrowRight from '../../../assets/images/arrow-right.png'
import style from './style.module.css'


export default function BtnNextPage () {

    return (
        <div>
            <img className={style.imgButton} src={ArrowRight} alt='arrow to right'></img>
        </div>
    )

}