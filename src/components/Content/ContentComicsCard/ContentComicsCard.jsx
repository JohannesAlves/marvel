import ComicsCard from '../../Comics/ComicsCard/ComicsCard';
import notFound from '../../../assets/images/notfound.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

// This component recive de data from api.
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
                    const { name, role } = creator;

                    creatorsName.push(name);
                    creatorsRole.push(role);
                }

                const charactersURI = card.characters.items;

                const characterData = [];
                for (let character of charactersURI) {
                    characterData.push(character);
                }

                return (
                    <ComicsCard
                        titleCharacter={characterData}
                        role={creatorsRole}
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
