import ContentCharacters from '../Content/contentCharacters/ContentCharacters';

function ListPage({ searchResults }) {
    const results = searchResults.map(item => (
        <ContentCharacters characters={searchResults} />
    ));

    const content = results?.length ? (
        results
    ) : (
        <article>
            <p>Not found!</p>
        </article>
    );

    return <main>{content}</main>;
}

export default ListPage;
