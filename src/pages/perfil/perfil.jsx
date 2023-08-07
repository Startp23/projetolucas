import { useState } from 'react'
import Style from './perfil.module.css'

export default function PerfilDoador() {
  const [state, setState] = useState(false)

  return (
    <>
      <button onClick={() => setState(true)} className={Style.perfilBtn} onclick="mostrarPopUp()">Perfil do Doador</button >
      {state && (
        <div className={Style.popUp}>
          < div className={Style.telaPopUp} >
            <h2>Perfil do Doador</h2>

            <div className={Style.ncompleto}>
              <label for="nomeCompleto">Nome Completo: </label>
              <input type="text" className={Style.nomeCompleto} required />
            </div >

            <div className={Style.fileira2}>
              < div className={
                Style.cpf}>
                <label for="cpf" > CPF: </label>
                <input type="text" className={Style.cpf} required />
              </div >

              <div className={Style.dnascimento}>
                < label for="dataNascimento" > Data de Nascimento: </label >
                <input type="date" className={Style.dataNascimento} required />
              </div >
            </div >

            <div className={Style.email1}>
              < label for="email" > E - mail: </label >
              <input type="email" className={Style.email} required />
            </div >

            <div className={Style.fileira4}>
              < div className={
                Style.tsanguineo}>
                <label for="tipoSanguineo" > Tipo Sanguíneo: </label>
                <select name="tipos" className={Style.tiposanguineo}>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="Ainda Nao Sei">Ainda não sei</option>
                </select>
              </div >

              <div className={Style.celular}>
                < label for="celular" > Celular: </label >
                <input type="tel" className={Style.celular} required />
              </div >
            </div >

            <div className={Style.endereço1}>
              < label for="endereco" > Endereço: </label >
              <textarea className={Style.endereco} required></textarea>
            </div >

            <div className={Style.botoes}>
              < button onClick={() => setState(false)} onclick="voltarPopUp()" className={Style.voltar} > Voltar</button >
              <button onclick="salvarPerfil()" className={Style.salvar}>Salvar</button>
            </div >
          </div >
        </div >
      )}

    </>
  )
}