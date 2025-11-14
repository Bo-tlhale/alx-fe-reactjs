import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({recipeId}) => {
    let navigate = useNavigate('/recipes');

    const recipe = useRecipeStore(state => state.deleteRecipe)
    
    const handleDelete = (event) => {
        event.preventDefault()
        deleteRecipe(recipeId)
    }
    
    return(
        <div>
            <button onClick={handleDelete && navigate}>Delete Recipe</button>
        </div>
    )
}

export default DeleteRecipeButton;