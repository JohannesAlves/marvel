import style from './style.module.css';

export default function ModalCreators({ name, role }) {
    const creators = name.map(el => {
        return (
            <li>
                <strong>{el}</strong>
            </li>
        );
    });

    const roles = role.map(el => {
        return <li>{el}</li>;
    });

    return (
        <>
            <div className={style.container}>
                <div className={style.creators_div}>
                    <h2>Creators:</h2>
                    <ul className={style.ul}>{creators}</ul>
                </div>

                <div>
                    <h2>Roles:</h2>
                    <ul className={style.roles}>{roles}</ul>
                </div>
            </div>
        </>
    );
}
