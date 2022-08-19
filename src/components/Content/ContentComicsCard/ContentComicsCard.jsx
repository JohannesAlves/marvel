import ComicsCard from '../../Comics/ComicsCard/ComicsCard';
import comic from '../../../assets/images/comic.jpg';

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

                return (
                    <ComicsCard
                        title={card.title}
                        image={card.thumbnail.path + '.jpg'}
                        description={description}
                        pageCount={countPage}
                        key={card.id}
                    />
                );
            })}
        </>
    );
}
