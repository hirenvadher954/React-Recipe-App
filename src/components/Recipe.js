import React from 'react';
import style from './recipe.module.css';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map(
                        ingredient => <li>{ingredient.text}</li>)
                }
            </ol>
            <p>Calories : {calories}</p>
            <img className={style.image} alt={title} src={image}/>
        </div>
    );
}

export default Recipe;
