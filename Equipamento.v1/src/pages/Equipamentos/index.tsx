
import './style.css'

function Equipamento() {


    return (


<> 

<main>
  <section className="menu">
      <div className="menu_conteudo">
        <ul>
          <div className="item_menu">
            <li className="espaco2">
              <a href="../VisaoGeral/index.html">
                <span className="icon size1">
                  <i className="bi bi-bar-chart-line" />
                </span>
                <span className="txt_link size1">Visão Geral</span>
              </a>
            </li>
            <li className="pagAtual espaco2">
              <a href="#">
                <span className="icon size1 IconAtual">
                  <i className="bi bi-columns-gap" />
                </span>
                <span className="txt_link size1">Equipamentos</span>
              </a>
            </li>
            <li className="espaco2">
              <a href="../Dashboard/index.html">
                <span className="icon size1">
                  <i className="bi bi-clipboard-data" />
                </span>
                <span className="txt_link size1">Dashboards</span>
              </a>
            </li>
            <li className="espaco2">
              <a href="../CadastroUsuario/index.html">
                <span className="icon size1">
                  <i className="bi bi-people" />
                </span>
                <span className="txt_link size1">Usuários</span>
              </a>
            </li>
            <li className="espaco2">
              <a href="../Configuracao2.0/index.html">
                <span className="icon size1">
                  <i className="bi bi-gear" />
                </span>
                <span className="txt_link size1">Configurações</span>
              </a>
            </li>
          </div>
          <li className="espaco2 btnSair ">
            <a href="../home/index.html">
              <span className="icon size1">
                <i className="bi bi-box-arrow-right" />
              </span>
              <span className="txt_link size1">Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
  <section className="equipamentos">
    <div className="painelEqpm">
      <input className="buscarInput" type="text" placeholder="Buscar..." />
      <div className="menu2Bbtn">
        <a
          className="btnNovoEqpm"
          href="../CadastramentoDeEquipamentos/index.html"
        >
          <button>+ Novo Equipamento</button>
        </a>
        <a className="btnEditar" href="">
          <button>Editar</button>
        </a>
        <a className="btnExcluir" href="">
          <button>Excluir</button>
        </a>
      </div>
      <table className="tabelaEqpm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Modelo</th>
            <th scope="col">Fabricante</th>
            <th scope="col">Data</th>
            <th scope="col">Consumo</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="linhaImpar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaPar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaImpar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaPar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaImpar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaPar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaImpar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaPar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
          <tr className="linhaImpar">
            <th scope="row">XXX</th>
            <td>XXXXX</td>
            <td>XXXXX</td>
            <td>XX/XXXX</td>
            <td>XXXXX(kWh)</td>
            <td>R$ XXXXX</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</main>
</>

)

}

export default Equipamento;    