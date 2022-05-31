import "./styleList.css";
import Card from "./card/indexCard";

function List({ listTransactions, setListTransactions }) {
  function del(itemExcluido) {
    const del = listTransactions.filter(
      (item) => item.description !== itemExcluido
    );
    setListTransactions(del);
  }

  return (
    <div className="list">
      <div className="divResumoF">
        <h3 className="h3Resumo">Resumo Financeiro</h3>
        <button className="btnFiltro">Todos</button>
        <button className="btnFiltro">Entrada</button>
        <button className="btnFiltro">Despesas</button>
      </div>
      <div>
        <>
          {listTransactions.length > 0 ? (
            listTransactions.map((transaction, index) => (
              <Card key={index} transaction={transaction} del={del} />
            ))
          ) : (
            <p className="vc"> Você ainda não possue nenhum lançamento </p>
          )}
        </>
      </div>
    </div>
  );
}
export default List;
