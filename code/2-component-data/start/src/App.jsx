import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'
import Steps from './Steps'
function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            'Add cut potatoes to a pot of heavily salted water.',
            'Bring the potatoes to a boil and cook until fork tender, about 15-20 minutes.',
            'Strain the potatoes and place them back into the pot.',
            'Add butter, cream, salt, and pepper to the pot.',
            'Mash the potatoes until they reach your desired consistency.',
            'Serve and enjoy!'
        ]
    };
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
        </article>
    )
}

export default App;
