import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "../board.scss";
import clubsImg from "../images/Cards/clubs.png";
import diamondsImg from "../images/Cards/diamond.png";
import heartsImg from "../images/Cards/heart.png";
import spadesImg from "../images/Cards/spades.png";
import Default from "../images/Cards/blank.png";

function PHand(props) {
  const [display, setDisplay] = useState("notdisplayed");
  const [selected, setSelected] = useState("notselected");

  const [lockedState, setLockedState] = useState("false");

  if (props.locked === "true") {
    setLockedState("true");
  }

  const showButton = (e) => {
    e.preventDefault();
    if (lockedState === "false") {
      setDisplay("displayed");
    }
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  const [CardType, setCardType] = useState("Card");
  const [CardImg, setCardImg] = useState(Default);
  const [cardValue, setCardValue] = useState("");
  const [cardState, setCardState] = useState({
    CardType,
    cardValue,
  });

  // const cardModal = () => {
  //   return <Card></Card>;
  // };

  const handleEntry = (e) => {
    if (e.key === "Enter") {
      if (
        e.target.value === "11" ||
        e.target.value === "J" ||
        e.target.value === "j" ||
        e.target.value === "Jack" ||
        e.target.value === "jack"
      )
        setCardValue("J");
      else if (
        e.target.value === "12" ||
        e.target.value === "Q" ||
        e.target.value === "q" ||
        e.target.value === "Queen" ||
        e.target.value === "queen"
      )
        setCardValue("Q");
      else if (
        e.target.value === "13" ||
        e.target.value === "K" ||
        e.target.value === "k" ||
        e.target.value === "King" ||
        e.target.value === "king"
      )
        setCardValue("K");
      else if (
        e.target.value === "14" ||
        e.target.value === "A" ||
        e.target.value === "1" ||
        e.target.value === "a" ||
        e.target.value === "Ace" ||
        e.target.value === "ace"
      )
        setCardValue("A");
      else if (e.target.value > 1 && e.target.value < 11)
        setCardValue(e.target.value);
      else console.log("Invalid card value entered");
    }
  };

  useEffect(() => {
    if (cardValue && CardType) {
      setSelected("selected");
      setCardState(cardValue + CardType);
      console.log(selected, cardState);
    }
  }, [cardValue, CardType]);

  useEffect(() => {
    switch (props.suit) {
      case "club":
        setCardType("Club");
        setCardImg(clubsImg);
        setSelected("selected");
        break;
      case "diamond":
        setCardType("Diamond");
        setCardImg(diamondsImg);
        setSelected("selected");
        break;
      case "spade":
        setCardType("Spade");
        setCardImg(spadesImg);
        setSelected("selected");
        break;
      case "heart":
        setCardType("Heart");
        setCardImg(heartsImg);
        setSelected("selected");
        break;
      default:
        return;
    }
  }, [props.suit]);

  useEffect(() => {
    switch (props.value) {
      case "11":
      case "J":
      case "j":
      case "Jack":
      case "jack":
        setCardValue("J");
        break;
      case "12":
      case "Q":
      case "q":
      case "Queen":
      case "queen":
        setCardValue("Q");
        break;
      case "13":
      case "K":
      case "k":
      case "King":
      case "king":
        setCardValue("K");
        break;
      case "14":
      case "A":
      case "a":
      case "1":
      case "Ace":
        setCardValue("A");
        break;
      default:
        setCardValue(props.value);
        break;
    }
  }, [props.value]);

  const handleClick = (e) => {
    const button = e.target;
    switch (button.alt) {
      case "club":
        setCardType("Club");
        setCardImg(clubsImg);
        setSelected("selected");
        break;
      case "diamond":
        setCardType("Diamond");
        setCardImg(diamondsImg);
        setSelected("selected");
        break;
      case "spade":
        setCardType("Spade");
        setCardImg(spadesImg);
        setSelected("selected");
        break;
      case "heart":
        setCardType("Heart");
        setCardImg(heartsImg);
        setSelected("selected");
        break;
      default:
        return;
    }
  };

  return (
    <Card
      className={`pcard ${selected ? "selected" : ""}`}
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
      id={cardValue}
    >
      <Card.Img className="cardBg" src={CardImg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>
          {cardValue} {CardType}
        </Card.Title>
        <Card.Text className="mt-4">
          <Container className="buttonBox">
            <button className={display} onClick={handleClick}>
              <img className="Suit" src={clubsImg} alt="club" />
            </button>
            <button className={display} onClick={handleClick}>
              <img className="Suit" src={diamondsImg} alt="diamond" />
            </button>
            <button className={display} onClick={handleClick}>
              <img className="Suit" src={spadesImg} alt="spade" />
            </button>
            <button className={display} onClick={handleClick}>
              <img className="Suit" src={heartsImg} alt="heart" />
            </button>
          </Container>
          <input
            placeholder="#?"
            onKeyDown={handleEntry}
            className="inputBox"
          ></input>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default PHand;
