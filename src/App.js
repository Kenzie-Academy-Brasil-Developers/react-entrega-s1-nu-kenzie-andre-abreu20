import "./App.css";
import DivTotalValue from "./components/DivTotalValue";
import Form from "./components/Form";
import Header from "./components/Header";
import SectionButtons from "./components/SectionButtons";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [card, setCard] = useState({});
  const [totalValue, setTotalValue] = useState(0);
  const [cardList, setCardList] = useState([]);
  function nullValue() {
    alert("Preenche todos os dados do formulario");
    return false;
  }

  function handleTotalMoney(card) {
    const { type, value } = card;
    type === "Entrada"
      ? setTotalValue(totalValue + value)
      : setTotalValue(totalValue - value);
  }
  function handleList(newCard) {
    newCard.description !== "" && newCard.value > 0 && newCard.type !== ""
      ? setCardList([...cardList, newCard])
      : nullValue();
  }

  function handleFilterList(searchedCard) {
    const filteredList = cardList.filter((card) => {
      return card !== searchedCard;
    });
    setCardList(filteredList);
  }

  function handleTotalMoneyReverse(card) {
    const { type, value } = card;
    console.log(card);
    type === "Entrada"
      ? setTotalValue(totalValue - value)
      : setTotalValue(totalValue + value);
  }

  return (
    <div className="App">
      <Header />
      <Form
        setCardList={setCardList}
        cardList={cardList}
        handleTotalMoney={handleTotalMoney}
        card={card}
        setCard={setCard}
        handleList={handleList}
      >
        <DivTotalValue totalValue={totalValue} />
      </Form>
      <SectionButtons></SectionButtons>
      <List
        cardList={cardList}
        handleFilterList={handleFilterList}
        handleTotalMoneyReverse={handleTotalMoneyReverse}
      />
    </div>
  );
}

export default App;
