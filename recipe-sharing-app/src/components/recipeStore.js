import { create } from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe]})),
    deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter(recipe => recipe.id !== id)})),
    updateRecipe: (id) => set(state => ({recipes: state.recipes.find(recipe => recipe.id === id ? {...recipe, ...updatedRecipe } : recipe)})),
    setRecipes: (recipes => set({ recipes })) 
}));

export default useRecipeStore;