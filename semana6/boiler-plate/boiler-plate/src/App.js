import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Fazer exercicio',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Texto da segunda tarefa',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: ''
      //filtro: 'Pendentes'
      //filtro: 'Completas'
    }

  componentDidUpdate() {
    localStorage.setItem('texto', JSON.stringify(this.state.inputValue))
  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('texto') 
    const arrayTexto = JSON.parse(tarefasSalvas)
    if(arrayTexto) {
      this.setState({texto: arrayTexto})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    //adicionar uma tarefa a lista
    const novaTarefa ={
      id: Date.now(), // cria id
      texto: this.state.inputValue,
      completa: false // inicia sempre no false, para ser alterado depois
    }

    const listaNovaTarefa = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: listaNovaTarefa})

  }

  selectTarefa = (id) => {

    // alterar status da tarefa
    const listaNovaTarefa = this.state.tarefas.map((tarefas) =>{ 
      if(id === tarefas.id){
        const listaFiltrada = {
          ...tarefas,
          completa: !tarefas.completa
        }
        return listaFiltrada
      }else {
        return tarefas
      }
    })
 
  this.setState({tarefas: listaNovaTarefa})

  }

  onChangeFilter = (event) => {
    this.setState({listaFiltrada: event.target.value})
   
    
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'Pendentes':
          return !tarefa.completa
        case 'Completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
