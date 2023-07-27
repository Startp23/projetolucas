import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicial/inicial"
import Cadastro from './pages/doador/cadastrodoador'
import CadColaborador from './pages/colaborador/cad-colaborador'

export default function Router(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/colaborador' element={<CadColaborador/>}/>
      </Routes>
    </BrowserRouter>
    )
}
