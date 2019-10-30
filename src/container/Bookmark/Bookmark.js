import React from 'react';

import Icons from '../../assets/img/sprite.svg';
import './Bookmark.css';

const bookmark = ( props ) => {

    return (
        <div className="bookmark">
            <ul className="bookmark__list">
                <li className="bookmark__item">
                    <div className="bookmark__details">
                        <h2 className="bookmark__title">Pokémon Detective Pikachu</h2>
                        <button className="bookmark__btn">
                            <svg className="bookmark__icon">
                                <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                            </svg>
                        </button>
                    </div>
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg" alt="photo" className="bookmark__photo" />
                </li>

                <li className="bookmark__item">
                    <div className="bookmark__details">
                        <h2 className="bookmark__title">Pokémon Detective Pikachu</h2>
                        <button className="bookmark__btn">
                            <svg className="bookmark__icon">
                                <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                            </svg>
                        </button>
                    </div>
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg" alt="photo" className="bookmark__photo" />
                </li>

                <li className="bookmark__item">
                    <div className="bookmark__details">
                        <h2 className="bookmark__title">Pokémon Detective Pikachu</h2>
                        <button className="bookmark__btn">
                            <svg className="bookmark__icon">
                                <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                            </svg>
                        </button>
                    </div>
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg" alt="photo" className="bookmark__photo" />
                </li>

                <li className="bookmark__item">
                    <div className="bookmark__details">
                        <h2 className="bookmark__title">Pokémon Detective Pikachu</h2>
                        <button className="bookmark__btn">
                            <svg className="bookmark__icon">
                                <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                            </svg>
                        </button>
                    </div>
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg" alt="photo" className="bookmark__photo" />
                </li>
            </ul>
        </div>
    )
}
export default bookmark;