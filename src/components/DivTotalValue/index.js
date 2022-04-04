import "./styles.css";

export default function DivTotalValue({ totalValue }) {
  return (
    <section className="section-TotalValue">
      <div>
        <h3>Valor Total:</h3>
        <p className="p-help">O valor se refere ao saldo</p>
      </div>
      <p className="p-TotalValue">${totalValue}</p>
    </section>
  );
}
