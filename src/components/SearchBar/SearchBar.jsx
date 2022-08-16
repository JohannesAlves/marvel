import style from './style.module.css';

function SearchBar({ items, setSearchResults }) {
    const handleSubmit = e => e.preventDefault();

    const handleSearchChange = e => {
        if (!e.target.value) return setSearchResults(items);

        const resultsArray = items.filter(
            item =>
                item.name.includes(e.target.value) ||
                item.description.includes(e.target.value),
        );

        setSearchResults(resultsArray);
    };

    return (
        <header>
            <form className={style.search} onSubmit={handleSubmit}>
                <input
                    className={style.searchInput}
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className={style.searchBtn}>SEARCH</button>
            </form>
        </header>
    );
}

export default SearchBar;
