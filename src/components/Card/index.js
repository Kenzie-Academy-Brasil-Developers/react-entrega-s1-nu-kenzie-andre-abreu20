import "./styles.css";
import { FaTrash } from "react-icons/fa";

export default function Card({
  card,
  index,
  cardType,
  handleFilterList,
  handleTotalMoneyReverse,
}) {
  return (
    <li className={cardType} key={index}>
      <div className="card-div">
        <div className="card-divDescryptionType">
          <h3 className="card-Description">{card.description}</h3>
          <p className="card-type">{card.type}</p>
        </div>
        <div>
          <p className="card-value">R${card.value}</p>
        </div>
        <button
          className="button-List"
          onClick={() => {
            handleFilterList(card);
            handleTotalMoneyReverse(card.description);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
