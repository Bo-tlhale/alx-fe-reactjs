import useRecipeStore from './recipeStore'

const EditRecipeForm = ({recipeId}) => {
    const recipe = useRecipeStore(state => 
        state.recipes.find(recipe => recipe.id === recipeId)
    )
    const [title, setTitle] = useState(recipe.title)
    const [description, setDescription] = useState(recipe.description)
    const updateRecipe = useRecipeStore(state => state.updateRecipe)

    const handleEdit = (event) => {
        event.preventDefault()
        updateRecipe(recipeId)
    }

    return(
        <form onSubmit={handleEdit}>
            <input
                type='text'
                value={title}
                onChange ={(e) => setTitle(e.target.value)}
                placeholder = 'Title'
            />
            <textarea
                value={description}
                onChange ={(e) => setDescription(e.target.value)}
                placeholder = 'Description'
            />
            <button type='submit'>Edit Recipe</button>
        </form>
    )
}

export default EditRecipeForm;
