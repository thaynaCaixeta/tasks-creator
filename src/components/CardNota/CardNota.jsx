import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg"

class CardNota extends Component {

apagar() {
  const indice = this.props.indice;
  this.props.apagarNota(indice);
}

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteIcon alt="icone-deletar" onClick={this.apagar.bind(this)}/>
          <h2>{this.props.categoria}</h2>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
