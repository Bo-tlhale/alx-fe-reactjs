import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import { SearchBar } from './SearchBar'

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return(
        <>
            <SearchBar/>
            <div>
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    <Link to={`/abt-recipe/${recipe.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RecipeList;