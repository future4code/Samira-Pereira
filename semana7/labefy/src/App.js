import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import PlayList from './components/Adiciona'
import ListPlay from './components/Lista'
import MusicaArtista from './components/AdicionaLista'

export default class App extends React.Component {

  state = {
    telaAtual: "adicionar", 
    editId: null
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "adicionar":
        return <PlayList irParaListPlay={this.irParaListPlay} />
      case "list":
        return <ListPlay irParaPlay={this.irParaPlay} irParaEditList={this.irParaEditList}  />
      case "editList":
        return <MusicaArtista playListId={this.state.editId} irParaListPlay={this.irParaListPlay}/>
      default:
        return <div>ERRO</div>
    }
  }

  irParaPlay = () => {
    this.setState({telaAtual: "adicionar"})
  }

  irParaListPlay = () => {
    this.setState({telaAtual:"list"})
  }

  irParaEditList = (id) => {
    this.setState({
      telaAtual:"editList",
      editId: id
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.escolherTela()}
        <Footer/>
      </div>
    );

  }
  
}