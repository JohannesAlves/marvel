import ComicsCard from '../../Comics/ComicsCard/ComicsCard';
import notFound from '../../../assets/images/notfound.jpg';

export default function ContentComicsCard(props) {
    return (
        <>
            {props.cards.map(card => {
                let description =
                    card.description <= 0
                        ? 'Description comic not found!'
                        : card.description;

                let countPage =
                    card.pageCount <= 0 ? 'Not found!' : card.pageCount;

                let image =
                    card.thumbnail.path ===
                    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                        ? notFound
                        : card.thumbnail.path + '.jpg';

                return (
                    <ComicsCard
                        title={card.title}
                        image={image}
                        description={description}
                        pageCount={countPage}
                        key={card.id}
                    />
                );
            })}
        </>
    );
}
