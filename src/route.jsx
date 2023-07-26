import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicial/inicial"
import Cadastro from './pages/doador/cadastrodoador'

export default function Router(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/doador' element={<Inicio/>}/>
      </Routes>
    </BrowserRouter>
    )
}
