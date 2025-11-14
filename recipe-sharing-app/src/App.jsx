import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import FavoriteLists from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddRecipeForm/>}/>
          <Route path='/recipes' element={<RecipeList/>}/>
          <Route path='/abt-recipe/:id' element={<RecipeDetails/>}/>
          <Route path='/favorites' element={<FavoriteLists/>}/>
          <Route path='/recommendations' element={<RecommendationsList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
