
function PaginationSelector ({charactersPerPage, setCharactersPerPage}) {

    return (
        <>
        Character per page: 
        <select value={charactersPerPage} onChange={(e) => setCharactersPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>
        </>
    )
}

export default PaginationSelector