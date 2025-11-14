import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddRecipeForm/>}/>
          <Route path='/recipes' element={<RecipeList/>}/>
          <Route path='/abt-recipe/:id' element={<RecipeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
