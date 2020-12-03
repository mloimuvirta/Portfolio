import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import kuva1 from '../images/MIESTEN_SOTA.png';
import kuva2 from '../images/SOTASUNNUNTAI_.png';

function Cards() {
    return (
        <div className='cards'>
            <h1>Under construction</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={kuva2}
                        text ="Here I'll show something someday"
                        label='pictures'
                        path='/mywork'
                        />
                        <CardItem src={kuva1}
                        text ="This too shall be awesome."
                        label='pictures'
                        path='/mywork'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
