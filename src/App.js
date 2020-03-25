import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from "./components/Recipe";

function App() {
    const APP_ID = 'da5f042b';
    const APP_KEYS = '7ee9fabff9693a436c091f45a57182da';

    const [recipes, setRecipe] = useState([]);
    const [query, setQuery] = useState("");
    const [finishQuery, setFinishQuery] = useState("Banana");


    useEffect(
        () => {
            getRecipes()
        },
        [finishQuery]
    );

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${finishQuery}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipe(data.hits)
    };

    const handleQuery = (e) => {
        setQuery(e.target.value)
    };

    const getSearch = e => {
        e.preventDefault();
        setFinishQuery(query);
    };

    return (
        <div className="App">

            <form onSubmit={getSearch} className="search-form">
                <input
                    value={query}
                    onChange={handleQuery}
                    type="text"
                    className="search-bar"
                />

                <button
                    type="submit"
                    className="search-button">
                    Search
                </button>
            </form>

            <div className="recipes">
                {
                    recipes.map(
                        recipe => <Recipe
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />)
                }
            </div>
        </div>
    );
}

export default App;
