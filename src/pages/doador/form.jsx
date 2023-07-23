import './cadastrodoador.css'

function Form() {
  return (
    <>
      <div className="container">
        <h1>Seja um doador</h1>
        <h3>e se torne uma gota de esperança</h3>
        <h2>Cadastre-se</h2>
        <form action="cadastro.js" method="POST">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName"></label>
              <input type="text" id="inputName" className="form-control" placeholder="Nome" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputSurname"></label>
              <input type="text" className="form-control" id="inputSurname" placeholder="Sobrenome" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAge"></label>
              <input type="text" className="form-control" id="inputAge" placeholder="Idade" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4"></label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="E-mail" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4"></label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress"></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Endereço" required />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2"></label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Complemento" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity"></label>
              <input type="text" className="form-control" id="inputCity" placeholder="Cidade" required />
            </div>
            <div className="form-group">
              <label htmlFor="tipo-sanguineo"></label>
              <select id="tipo-sanguineo" name="tipo-sanguineo" required>
                <option value="" disabled selected>Selecione o Tipo Sanguíneo</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="nao-sei">Ainda não sei</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Cadastre-se</button>
        </form>
      </div>
    </>
  )
}

export default Form