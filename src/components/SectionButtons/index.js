import { useState } from "react";
import "./styles.css";

export default function SectionButtons() {
  const [bTodos, setBTodos] = useState("");
  const [bEntradas, setBEntradas] = useState("");
  const [bDespesas, setBDespesas] = useState("");

  function handleIdChangeTodos() {
    setBTodos("ativo");
    setBEntradas("");
    setBDespesas("");
  }
  function handleIdChangeEntradas() {
    setBTodos("");
    setBEntradas("ativo");
    setBDespesas("");
  }

  function handleIdChangeDespesas() {
    setBTodos("");
    setBEntradas("");
    setBDespesas("ativo");
  }
  return (
    <section className="section-buttonsFilter">
      <div>
        <p className="lista-titulo">Resumo Financeiro</p>
      </div>
      <div className="div-buttons">
        <button
          id={bTodos}
          className="button-Todos"
          onClick={() => handleIdChangeTodos()}
        >
          Todos
        </button>
        <button
          id={bEntradas}
          className="button-Entradas"
          onClick={() => handleIdChangeEntradas()}
        >
          Entradas
        </button>
        <button
          id={bDespesas}
          className="button-Despesas"
          onClick={() => handleIdChangeDespesas()}
        >
          Despesas
        </button>
      </div>
    </section>
  );
}
