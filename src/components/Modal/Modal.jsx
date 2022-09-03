import { useEffect, useState } from 'react';
import style from './style.module.css';
import ModalHome from './ModalHome/ModalHome';
import ModalCreators from './ModalCreators/ModalCreators';
import md5 from 'md5';

function Modal({ image, title, description, pageCount, name, role }) {
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
            <div className={style.container_btn}>
                <button onClick={toggleModal} className={style.btn_modal}>
                    More Information
                </button>
            </div>

            {modal && (
                <div className={style.modal}>
                    <div onClick={toggleModal} className={style.overlay}></div>
                    <div className={style.modal_content}>
                        <div className={style.comic_img_div}>
                            <img className={style.comic_img} src={image} />
                        </div>

                        <div className={style.navModal}>
                            <ul className={style.ul}>
                                <li className={style.li}>Home</li>
                                <li className={style.li}>Creators</li>
                                <li className={style.li}>Characters</li>
                                <li className={style.li}>Collections</li>
                            </ul>
                        </div>

                        <div className={style.comic_information}>
                            <ModalCreators name={name} role={role} />
                            {/* <ModalHome
                                title={title}
                                description={description}
                                pageCount={pageCount}
                            /> */}
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
