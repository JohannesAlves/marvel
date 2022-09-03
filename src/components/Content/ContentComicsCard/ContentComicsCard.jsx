import ComicsCard from '../../Comics/ComicsCard/ComicsCard';
import notFound from '../../../assets/images/notfound.jpg';
import { useState } from 'react';

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

                const creatorsObj = card.creators.items.map(objCreator => {
                    const creators = objCreator;

                    return creators;
                });

                const creatorsName = [];
                const creatorsRole = [];

                for (let creator of creatorsObj) {
                    const creatorName = creator.name;
                    const creatorRole = creator.role;

                    creatorsName.push(creatorName);
                    creatorsRole.push(creatorRole);
                }

                console.log(creatorsName);

                return (
                    <ComicsCard
                        name={creatorsName}
                        title={card.title}
                        image={image}
                        description={description}
                        pageCount={countPage}
                        key={card.id}
                    />
                );

                /*
                1. preciso passar como name e role o name de cada objeto e o seu respectivo role
                */
            })}
        </>
    );
}
