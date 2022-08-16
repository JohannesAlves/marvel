import style from './style.module.css';

export default function SearchBar({ setSearch, search }) {
    return (
        <input
            className={style.searchBar}
            name="search"
            type="text"
            placeholder="Search character..."
            onChange={e => setSearch(e.target.value)}
            value={search}
        ></input>
    );
}
