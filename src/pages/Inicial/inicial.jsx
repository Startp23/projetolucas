import './inicial.css'

function Iniciodoador() {


    return (
        <>
            <div id='parede' className='menu'>
                <div id='esquerdo' className='menu'>
                    <button className='barras'> <img src="/iconeMenu.png" alt width={25} height={25} /></button>
                </div>
                <div id='centro' className='menu'>
                    <img src="/LogoProjeto.png" alt="" />
                </div>
                <div id='direito' className='menu'>
                    <input className='search' type="search" placeholder='Pesquisar' />
                </div>
            </div>
            <div className='carrossel'></div>
            <div id='informacao' className='container'>
                <div className='information'>
                    <h1 className='titulos'>QUAL A IMPORTANCIA DA DOAÇÃO DE SANGUE?</h1>
                    <p>Doar sangue é um ato solidário que salva vidas e mantém os estoques de sangue estáveis. Além de ajudar em casos de emergência, a<br /> doação regular promove um check-up de saúde e fortalece a<br /> comunidade. É um gesto de generosidade e cuidado com o próximo.</p>

                    <h1 className='titulos'>O QUE É NECESSÁRIO PARA<br /> DOAR SANGUE?</h1>
                    <p>1. Idade: Geralmente, é necessário ter entre 16 e 69 anos. Alguns países podem ter restrições para doadores abaixo de 18 anos.<br /><br />


                        2. Peso adequado: É necessário ter um peso mínimo estabelecido, que pode variar, mas geralmente é em torno de 50 kg.<br /><br />


                        3. Boas condições de saúde: Os doadores devem estar em boas condições de saúde no momento da doação. Algumas condições<br /> médicas específicas podem impedir temporariamente a doação.<br /><br />


                        4. Não estar em jejum: É recomendado que os doadores tenham feito uma refeição leve e saudável antes da doação, evitando alimentos<br /> gordurosos.<br /><br />


                        5. Não ter ingerido álcool: É importante evitar o consumo de bebidas alcoólicas nas 24 horas anteriores à doação.<br /><br />


                        6. Não ter realizado tatuagens ou piercings recentes: Em alguns países, pode haver restrições temporárias após a realização desses<br /> procedimentos.<br /><br /></p>

                    <h1 className='titulos'>QUEM SOMOS?</h1>
                    <p>
                        Nós somos uma equipe de estudantes do Projeto Social Start LATAM, empenhados em facilitar e incentivar a doação de sangue para <br /> ajudar aqueles que necessitam no Recife. Conscientes do baixo índice de<br /> doação, buscamos promover essa boa ação e conscientizar a população sobre o impacto positivo que ela pode ter ao salvar vidas.<br /> Estamos comprometidos em fazer a diferença e contribuir para um mundo melhor.
                    </p>

                    <h1 className='titulos'>QUAIS OS BENEFÍCIOS DE DOAR SANGUE?</h1>
                    <p>Salvar vidas: A doação de sangue é fundamental para suprir a demanda de<br/> transfusões e ajudar pacientes em situações de emergência, cirurgias e tratamentos<br/> médicos.<br/><br/>

                        Saúde cardiovascular: A doação regular de sangue pode ajudar a reduzir o risco<br/> de doenças cardiovasculares, como ataques cardíacos e derrames,<br/> promovendo a circulação saudável.<br/><br/>

                        Check-up de saúde: Antes de doar sangue, são realizados exames para detectar<br/> doenças transmissíveis, o que pode proporcionar um oportunidade de receber <br/>orientações médicas e identificar possíveis condições de saúde.<br/><br/>

                        Bem-estar emocional: A doação de sangue é um ato altruísta que promove uma<br/> sensação de satisfação e bem-estar emocional, sabendo que está ajudando outras<br/> pessoas em momentos difíceis.<br/><br/>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Iniciodoador