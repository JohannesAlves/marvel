import { useEffect, useState } from 'react';
import style from './style.module.css';
import ModalHome from './ModalHome/ModalHome';
import ModalCreators from './ModalCreators/ModalCreators';
import ModalCharacters from './ModalCharacters/ModalCharacters';

function Modal({ image, title, description, pageCount, name, role, titleCharacter }) {
    const [modal, setModal] = useState(false);

    const [activeTab, setActiveTab] = useState('home');

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active_modal');
    } else {
        document.body.classList.remove('active_modal');
    }

    const handleActiveTab = type => {
        setActiveTab(type);
    };

    function ActiveTab() {
        if (activeTab === 'home') {
            return <ModalHome title={title} description={description} pageCount={pageCount} />;
        }
        if (activeTab === 'creators') {
            return <ModalCreators name={name} role={role} />;
        }
        if (activeTab === 'characters') {
            return <ModalCharacters titleCharacter={titleCharacter} />;
        }
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
                                <li className={style.li} onClick={() => handleActiveTab('home')}>
                                    Home
                                </li>
                                <li className={style.li} onClick={() => handleActiveTab('creators')}>
                                    Creators
                                </li>
                                <li className={style.li} onClick={() => handleActiveTab('characters')}>
                                    Characters
                                </li>
                                <li className={style.li} onClick={() => handleActiveTab('collections')}>
                                    Collections
                                </li>
                            </ul>
                        </div>
                        <div className={style.comic_information}>
                            <ActiveTab />

                            <button className={style.close_modal} onClick={toggleModal}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
