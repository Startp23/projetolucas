import React from 'react';
import './inicial.css';

function Iniciodoador() {
  return (
    <>
      <div className="menu">
        <div className="menu-item">
          <button className="barras">
            <img id='icon' src="/iconeMenu.png" alt="Menu" width={25} height={25} />
          </button>
        </div>
        <div className="menu-item">
          <img src="/LogoProjeto.png" alt="Logo" />
        </div>
        <div className="menu-item">
          <input className="search" type="search" placeholder="Pesquisar" />
        </div>
      </div>
      <div className="carrossel">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img id="imgcar" src="img4.jpg" className="d-block w-100 carousel-image" alt="Carrossel 1" />
            </div>
            <div className="carousel-item">
              <img id="imgcar" src="img2.jpg" className="d-block w-100 carousel-image" alt="Carrossel 2" />
            </div>
            <div className="carousel-item">
              <img id="imgcar" src="img6.jpeg" className="d-block w-100 carousel-image" alt="Carrossel 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="informacao">
        <div className="texto">
          <h1 className="titulos">QUAL A IMPORTÂNCIA DA DOAÇÃO DE SANGUE?</h1>
          <p>Doar sangue é um ato solidário que salva vidas e mantém os estoques de sangue estáveis. Além de ajudar em casos de emergência, a doação regular promove um check-up de saúde e fortalece a comunidade. É um gesto de generosidade e cuidado com o próximo.</p>
        </div>

        <div className="texto">
          <h1 className="titulos">O QUE É NECESSÁRIO PARA DOAR SANGUE?</h1>
          <p>1. Idade: Geralmente, é necessário ter entre 16 e 69 anos. Alguns países podem ter restrições para doadores abaixo de 18 anos.</p>
          <p>2. Peso adequado: É necessário ter um peso mínimo estabelecido, que pode variar, mas geralmente é em torno de 50 kg.</p>
          <p>3. Boas condições de saúde: Os doadores devem estar em boas condições de saúde no momento da doação. Algumas condições médicas específicas podem impedir temporariamente a doação.</p>
          <p>4. Não estar em jejum: É recomendado que os doadores tenham feito uma refeição leve e saudável antes da doação, evitando alimentos gordurosos.</p>
          <p>5. Não ter ingerido álcool: É importante evitar o consumo de bebidas alcoólicas nas 24 horas anteriores à doação.</p>
          <p>6. Não ter realizado tatuagens ou piercings recentes: Em alguns países, pode haver restrições temporárias após a realização desses procedimentos.</p>
        </div>

        <div className="texto">
          <h1 className="titulos">QUEM SOMOS?</h1>
          <p>
            Nós somos uma equipe de estudantes do Projeto Social Start LATAM, empenhados em facilitar e incentivar a doação de sangue para ajudar aqueles que necessitam no Recife. Conscientes do baixo índice de doação, buscamos promover essa boa ação e conscientizar a população sobre o impacto positivo que ela pode ter ao salvar vidas. Estamos comprometidos em fazer a diferença e contribuir para um mundo melhor.
          </p>
        </div>

        <div className="texto">
          <h1 className="titulos">QUAIS OS BENEFÍCIOS DE DOAR SANGUE?</h1>
          <p>Salvar vidas: A doação de sangue é fundamental para suprir a demanda de transfusões e ajudar pacientes em situações de emergência, cirurgias e tratamentos médicos.</p>
          <p>Saúde cardiovascular: A doação regular de sangue pode ajudar a reduzir o risco de doenças cardiovasculares, como ataques cardíacos e derrames, promovendo a circulação saudável.</p>
          <p>Check-up de saúde: Antes de doar sangue, são realizados exames para detectar doenças transmissíveis, o que pode proporcionar um oportunidade de receber orientações médicas e identificar possíveis condições de saúde.</p>
          <p>Bem-estar emocional: A doação de sangue é um ato altruísta que promove uma sensação de satisfação e bem-estar emocional, sabendo que está ajudando outras pessoas em momentos difíceis.</p>
        </div>
      </div>
    </>
  )
}

export default Iniciodoador;
