import { create } from 'zustand';

const useRecipeStore = create(set => ({
    //Recipes 
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id !== id)})),
    updateRecipe: (id) => set(state => ({recipes: state.recipes.find(recipe => recipe.id === id ? {...recipe, ...updatedRecipe } : recipe)})),
    setRecipes: (recipes => set({ recipes })),
    //Search and Filter
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )})),
    //Favourites
    favourites: [],
    addFavourite: (recipeId) => set(
      state => ({ favourites: [...state.favourites, recipeId]})
    ),
    deleteFavourite: (recipeId) => set(
      state => ({ favourites: state.favourites.filter(id => id !== recipeId)})
    ),
    //Recommendations
    recommendations: [],
    generateRecommendations : () => set(
      state => {
        const recommended = state.recipes.filter(recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };}
    ),
}));

export default useRecipeStore;