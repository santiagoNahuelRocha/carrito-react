import './App.css'
import { useReducer } from 'react'
import Rutas from "./components/Rutas"
import { CartReducer, CartInicialState } from './reducers/Reducer'
import { TYPES } from './reducers/Actions'
import Products from './components/Products'

function App() {



  return (
      <Rutas />
  )
}

export default App
