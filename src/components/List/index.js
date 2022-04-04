import "./styles.css";
import Card from "../Card";

export default function List({
  cardList,
  handleFilterList,
  handleTotalMoneyReverse,
}) {
  return (
    <ul id="form-list">
      {cardList.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            cardType={card.type}
            handleFilterList={handleFilterList}
            handleTotalMoneyReverse={handleTotalMoneyReverse}
          ></Card>
        );
      })}
    </ul>
  );
}
