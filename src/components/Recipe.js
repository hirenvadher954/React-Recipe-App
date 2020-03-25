import React from 'react';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map(
                        ingredient => <li>{ingredient.text}</li>)
                }
            </ol>
            <p>{calories}</p>
            <img alt={title} src={image}/>
        </div>
    );
}

export default Recipe;
