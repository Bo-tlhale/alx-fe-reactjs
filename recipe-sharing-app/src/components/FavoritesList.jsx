import useRecipeStore from './recipeStore'

const FavoritesList = () => {
    const favorites = useRecipeStore(state => state.favorites.map(id =>
        state.recipes.find(recipe => recipe.id === id)
    ))
    const addFavorite = useRecipeStore(state => state.addFavorite)

    return(
        <div>
            <h2>My Favorites</h2>
            {favorites.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <div>
                        <button onClick={addFavorite(recipe.id)}>Remove As Favorite</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FavoritesList;