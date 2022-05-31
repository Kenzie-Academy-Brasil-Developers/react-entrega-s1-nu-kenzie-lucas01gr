import { useState } from "react";
import "./styleForm.css";
function Form({ addListTransaction }) {
  const [inputDescri, setInputDescri] = useState("");
  const [inputValor, setInputValor] = useState("");
  const [inputSelect, setInputSelect] = useState("selecione");

  return (
    <>
      <form className="form">
        <div>
          <p className="descricao">Descrição</p>
          <input
            className="inputDescri"
            value={inputDescri}
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setInputDescri(event.target.value)}
          ></input>
          <p className="exCompra">ex:Compra de livros</p>
        </div>
        <div className="divNumberEselect">
          <div>
            <label>Valor</label>
            <input
              className="inputNumber"
              type="number"
              value={inputValor}
              onChange={(event) => setInputValor(Number(event.target.value))}
            ></input>
          </div>
          <div>
            <label>Tipo de valor</label>
            <select
              className="select"
              value={inputSelect}
              onChange={(event) => setInputSelect(event.target.value)}
            >
              <option>selecione</option>
              <option>entrada</option>
              <option>saida</option>
            </select>
          </div>
        </div>
        <button
          className="btnInserir"
          onClick={(event) => {
            event.preventDefault();
            if (
              inputDescri !== "" &&
              inputValor !== "" &&
              inputSelect !== "selecione"
            ) {
              addListTransaction({
                description: inputDescri,
                type: inputSelect,
                value: inputValor,
              });
              setInputDescri("");
              setInputValor("");
              setInputSelect("selecione");
            }
          }}
        >
          Insira valor
        </button>
      </form>
    </>
  );
}
export default Form;
