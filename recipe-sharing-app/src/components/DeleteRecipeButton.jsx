import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({recipeId}) => {
    const recipe = useRecipeStore(state => state.deleteRecipe)
    
    const handleDelete = (event) => {
        event.preventDefault()
        deleteRecipe(recipeId)
    }
    
    return(
        <div>
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    )
}

export default DeleteRecipeButton;