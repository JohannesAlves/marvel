import style from './style.module.css';

export default function ModalCreators({ name, role }) {
    const creators = name.map(el => {
        return (
            <li key={el}>
                <strong>{el}</strong>
            </li>
        );
    });

    const roles = role.map(el => {
        return <li key={el}>{el}</li>;
    });

    const contentCreators =
        creators.length <= 0 ? <h2>Creators not found!</h2> : creators;

    return (
        <>
            <div className={style.container}>
                <div className={style.creators_div}>
                    <h2>Creators:</h2>
                    <ul className={style.ul}>{contentCreators}</ul>
                </div>

                <div>
                    <h2>Roles:</h2>
                    <ul className={style.roles}>{roles}</ul>
                </div>
            </div>
        </>
    );
}
