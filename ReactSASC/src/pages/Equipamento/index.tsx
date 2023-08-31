import api from "../../utils/api";
import { useEffect, useState } from "react"
import './style.css'

function Equipamento() {

const[equip, setEquip] = useState<any[]>([

])

const[Idgititado, setIdgititado] = useState<string>("");

const[listaIdFiltrados, setlistaIdFiltrados] = useState<any[]>(equip);

useEffect(() => {
    document.title = "Lista de Equipamentos"
        
    listarEquipamentos()

},[])

function buscarPorId(event:any){
    event.preventDefault();

    const idsFiltrados = equip.filter((eq:any) => eq.id.includes(Idgititado.toLocaleUpperCase()))
    if(idsFiltrados.length===0){
        alert("Nenhum Id encontrado!!")
    }
    else{
        setlistaIdFiltrados(idsFiltrados)
    }
}

function retornoEquipGeral(event:any){
    if(event.target.value === ""){
        setlistaIdFiltrados(equip)
    }
    setIdgititado(event.target.value)
}

function listarEquipamentos(){
    api.get('users').then((resposta: any) => {console.log(resposta.data);
        setEquip(resposta.data)
    })
}



    return (
<>
<main>
  <section className="equipamentos">
    <div className="painelEqpm">
      <input className="buscarInput" type="text" placeholder="Buscar por ID ..." />
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
          <tr>
            {
            listaIdFiltrados.length===0 ? 
              equip.map((equip:any, index:number) => {
               return <td key={index}>

                  id={equip.id}
                  modelo={equip.modelo}
                  fabricante={equip.fabricante}
                  data={equip.data}
                  consumo={equip.consumo}
                  valor={equip.valor}                    
            </td>
            }) : listaIdFiltrados.map((equip:any, index:number) => {
                  return <td key={index}>

                 id={equip.id}
                 modelo={equip.modelo}
                 fabricante={equip.fabricante}
                 data={equip.data}
                 consumo={equip.consumo}
                 valor={equip.valor}                   
           </td>
              })
            }
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