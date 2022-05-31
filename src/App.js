import "./App.css";
import Header from "./header/indexHeader";
import Form from "./form/indexForm";
import TotalMoney from "./totalMoney/indexTotalMoney";
import List from "./list/indexList";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addListTransaction(newList) {
    setListTransactions([...listTransactions, newList]);
  }

  const valorTotal = listTransactions.reduce((valorAnterior, atualValue) => {
    return atualValue.type === "entrada"
      ? valorAnterior + atualValue.value
      : valorAnterior - atualValue.value;
  }, 0);

  return (
    <div>
      <div>
        <Header />
        <div className="divContainer">
          <Form addListTransaction={addListTransaction} />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
        <TotalMoney valorTotal={valorTotal} />
      </div>
    </div>
  );
}

export default App;
