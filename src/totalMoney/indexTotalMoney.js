import "./styleTotalMoney.css";

function TotalMoney({ valorTotal }) {
  return (
    <div className="divTotalMoney">
      <p className="valorTotal">
        Valor Total <span className="spanValor">R$ {valorTotal}</span>
      </p>
    </div>
  );
}

export default TotalMoney;
