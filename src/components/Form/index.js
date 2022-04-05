import "./styles.css";
import { useState } from "react";
export default function Form({
  children,
  handleTotalMoney,
  card,
  setCard,
  handleList,
}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [state, setState] = useState({});

  function handleChange(event) {
    setState({ value: event.target.value });
  }

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (card.value && card.description && card.type) {
            handleTotalMoney(card);
          }
          setDescription("");
          setValue(null);
          setType("");
          setCard({});
        }}
      >
        <section className="form-descricao">
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            id="form-InputDescription"
            onChange={(event) => {
              setDescription(event.target.value);
              setCard({
                description: event.target.value,
                value: value,
                type: type,
              });
            }}
          ></input>
          <p>Ex: Compra de roupas</p>
        </section>
        <section className="form-valores">
          <div>
            <p>Valor</p>
            <input
              type="number"
              placeholder="0"
              id="form-InputValue"
              onChange={(event) => {
                const inputForm = document.getElementById("form-InputValue");
                if (Number(inputForm.value) <= 0) {
                  inputForm.classList.add("negative-value");
                  setTimeout(() => {
                    inputForm.classList.remove("negative-value");
                  }, 1000);
                }
                const resultInputValue = parseFloat(
                  parseInt(event.target.value)
                );
                setValue(resultInputValue);
                setCard({
                  description: description,
                  value: resultInputValue,
                  type: type,
                });
              }}
              onWheel={() => {
                if (document.activeElement.type === "number") {
                  document.activeElement.blur();
                }
              }}
            ></input>
            <i>R$</i>
          </div>
          <div>
            <p>Tipo de valor</p>
            <select
              value={state.value}
              onChange={(event) => {
                handleChange(event);
              }}
              onClick={(event) => {
                setType(event.target.value);
                setCard({
                  description: description,
                  value: value,
                  type: event.target.value,
                });
              }}
            >
              <option className="options" value="Entrada">
                Entrada
              </option>
              <option className="options" value="Despesa">
                Despesa
              </option>
            </select>
          </div>
        </section>
        <button
          type="submit"
          onClick={() => {
            handleList(card);
            const inputDescription = document.getElementById(
              "form-InputDescription"
            );
            const InputValue = document.getElementById("form-InputValue");
            inputDescription.value = "";
            InputValue.value = "";
          }}
        >
          Inserir Valor
        </button>
      </form>
      {children}
    </section>
  );
}
