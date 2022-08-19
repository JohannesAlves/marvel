import style from './style.module.css';

export default function ModalCreators() {
    return (
        <div className={style.creators}>
            <ul>
                <li className={style.li}>
                    <div className={style.name_creator}>
                        <h2>David Hine -</h2>
                    </div>

                    <div className={style.role}>
                        <h2>writer</h2>
                    </div>
                </li>
            </ul>
        </div>
    );
}
