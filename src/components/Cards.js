import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Under construction</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='../videos/video.mp4'
                        text ="How cute is she"
                        label='cat'
                        path='/mywork'
                        />
                        <CardItem src='../images/doli.jpg'
                        text ="How cute is she"
                        label='cat'
                        path='/mywork'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
