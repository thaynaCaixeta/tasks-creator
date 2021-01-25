import React, { Component } from "react";
import "./estilo.css"

class ListaDeCategorias extends Component {

    _handleEventoInput(event) {
        if (event.key === "Enter") {
            let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li
                            className="lista-categorias_item"
                            key={index}>
                            {categoria}
                        </li>
                    })
                    }
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        )
    }
}

export default ListaDeCategorias;