import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import kuva from '../images/doli.jpg';
import kuva2 from '../images/SOTASUNNUNTAI_.png';

function Cards() {
    return (
        <div className='cards'>
            <h1>Under construction</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={kuva2}
                        text ="How cute is she"
                        label='cat'
                        path='/mywork'
                        />
                        <CardItem src={kuva}
                        text ="wow"
                        label='thing'
                        path='/mywork'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
