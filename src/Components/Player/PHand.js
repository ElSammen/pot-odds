import React, { useEffect, useState, useMemo } from "react";
import { Card, Container } from "react-bootstrap";
import "../board.scss";
import clubsImg from "../images/Cards/clubs.png";
import diamondsImg from "../images/Cards/diamond.png";
import heartsImg from "../images/Cards/heart.png";
import spadesImg from "../images/Cards/spades.png";
import Default from "../images/Cards/cardback.png";

function PHand(props) {
  const [CardType, setCardType] = useState("Card");
  const [CardImg, setCardImg] = useState(Default);
  const [unfilled, setUnfilled] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [cardState, setCardState] = useState({
    CardType,
    cardValue,
  });

  useEffect(() => {
    let cardType = "";
    let cardImg = "";

    switch (props.suit) {
      case "club":
        cardType = "Club";
        cardImg = clubsImg;
        break;
      case "diamond":
        cardType = "Diamond";
        cardImg = diamondsImg;
        break;
      case "spade":
        cardType = "Spade";
        cardImg = spadesImg;
        break;
      case "heart":
        cardType = "Heart";
        cardImg = heartsImg;
        break;
      default:
        cardImg = Default;
        setUnfilled("default");
        return;
    }

    setCardType(cardType);
    setCardImg(cardImg);
  }, [props.suit]);

  const propValue = useMemo(() => {
    switch (props.value) {
      case "11":
      case "J":
      case "j":
      case "Jack":
      case "jack":
        return "J";
      case "12":
      case "Q":
      case "q":
      case "Queen":
      case "queen":
        return "Q";
      case "13":
      case "K":
      case "k":
      case "King":
      case "king":
        return "K";
      case "14":
      case "A":
      case "a":
      case "1":
      case "Ace":
      case "ace":
        return "A";
      default:
        return props.value;
    }
  }, [props.value]);

  return (
    <Card className={`pcard`} id={cardValue} style={{transform: `${props.rotation}`}}>
      <Card.Img
        className={`cardBg ${unfilled}`}
        src={CardImg}
        alt="Card image"
      />
      {/* <Card.ImgOverlay> */}
      {propValue && CardType ? (
        <Card.Title>
          {propValue} {CardType}
        </Card.Title>
      ) : null}
      {/* </Card.ImgOverlay> */}
    </Card>
  );
}

export default PHand;
