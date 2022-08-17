import { useState } from 'react';
import style from './style.module.css';
import comic from '../../assets/images/comic.jpg';

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active_modal');
    } else {
        document.body.classList.remove('active_modal');
    }

    return (
        <div className={style.container}>
            <button onClick={toggleModal} className={style.btn_modal}>
                More Information
            </button>

            {modal && (
                <div className={style.modal}>
                    <div onClick={toggleModal} className={style.overlay}></div>
                    <div className={style.modal_content}>
                        <img className={style.comic_img} src={comic} />

                        <div className={style.comic_information}>
                            <div className={style.title_comic}>
                                <h2>Title Comic:</h2>
                                <p>Ultimate X-Men</p>
                            </div>

                            <h2>Description Comic:</h2>
                            <div className={style.description_comic}>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Culpa ratione quos ipsa
                                    rep ellendus dignissimos reprehenderit ex
                                    harum voluptates eaque quas. Consequatur
                                    aspernatur earum quis! E ius quibusdam
                                    quaerat iusto soluta in.
                                </p>
                            </div>
                            <button
                                className={style.close_modal}
                                onClick={toggleModal}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
