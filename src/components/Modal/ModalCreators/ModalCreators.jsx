import style from './style.module.css';

export default function ModalCreators({ name, role }) {
    return (
        <ul className={style.ul}>
            <li className={style.li}>
                <div className={style.name_creator}>
                    <h2>{name}</h2>
                </div>

                <div className={style.role}>
                    <h2>{role}</h2>
                </div>
            </li>
        </ul>
    );
}
