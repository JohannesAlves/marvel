import ComicsCard from '../../Comics/ComicsCard/ComicsCard';
import comic from '../../../assets/images/comic.jpg';

export default function ContentComicsCard(props) {
    return (
        <>
            {props.cards.map(card => {
                return (
                    <ComicsCard
                        title={card.title}
                        image={card.thumbnail.path + '.jpg'}
                        key={card.id}
                    />
                );
            })}
        </>
    );
}
