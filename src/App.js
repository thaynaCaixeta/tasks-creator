import React, { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import ListaDeNotas from "./components/ListaDeNotas";
import ArrayDeNotas from "./data/ArrayDeNotas";
import Categorias from "./data/Categorias";


class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  };

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
        categorias={this.categorias}
        criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}

export default App;
