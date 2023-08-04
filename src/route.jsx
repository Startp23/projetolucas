<<<<<<< HEAD
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
=======
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
>>>>>>> b0f9aadcb3e45baf8b2c84c8fa58b2f6db5bfcf2
