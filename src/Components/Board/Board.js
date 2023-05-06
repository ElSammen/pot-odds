import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import '../board.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PHand from '../Player/PHand';
import { CloseButton } from 'react-bootstrap';



function Board() {

  const [cardInfo, setCardInfo] = useState("")
  const [boardData, setBoardData] = useState([
    { card: 1, cardInfo: "" },
    { card: 2, cardInfo: "" },
    { card: 3, cardInfo: "" },
    { card: 4, cardInfo: "" },
    { card: 5, cardInfo: "" }
  ])

  const getCardInfo = (data) => {
    console.log("do it work", data)
    setCardInfo(data);
    if (data) {
      setUserCards(true)
    }

  }

  const [userCards, setUserCards] = useState(false)

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);





  return (
    <Container fluid className="board">
      <CloseButton className="clearButton" />

      <Container fluid className="boardCards px-0 w-auto">
        <PHand
          key="boardcard1"
          getCardInfo={() => getCardInfo(card1Ref)}
          ref={card1Ref}
        />
        <PHand
          key="boardcard2"
          getCardInfo={() => getCardInfo(card2Ref)}
          ref={card2Ref}
        />
        <PHand
          key="boardcard3"
          getCardInfo={() => getCardInfo(card3Ref)}
          ref={card3Ref}
        />
        <PHand
          key="boardcard4"
          getCardInfo={() => getCardInfo(card4Ref)}
          ref={card4Ref}
        />
        <PHand
          key="boardcard5"
          getCardInfo={() => getCardInfo(card5Ref)}
          ref={card5Ref}
        />
      </Container>
      <Container fluid className="playerHand px-0 w-auto">
        <PHand key="usercard1" getCardInfo={getCardInfo} id="usercard1" />
        <PHand key="usercard2" getCardInfo={getCardInfo} id="usercard2" />
      </Container>
    </Container>
  )
}
export default Board