import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import "../board.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PHand from "../Player/PHand";
import { CloseButton } from "react-bootstrap";

function Board() {
  const [cardInfo, setCardInfo] = useState("");
  const [boardData, setBoardData] = useState([
    { card: 1, cardInfo: "" },
    { card: 2, cardInfo: "" },
    { card: 3, cardInfo: "" },
    { card: 4, cardInfo: "" },
    { card: 5, cardInfo: "" },
  ]);

  const [turn, setTurn] = useState(false);
  const [river, setRiver] = useState(false);

  const getCardInfo = (data) => {
    console.log("do it work", data);
    setCardInfo(data);
    if (data) {
      setUserCards(true);
    }
  };

  const [userCards, setUserCards] = useState(false);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  const [pot, setPot] = useState("");
  const [bet, setBet] = useState("");

  const potOddBoxes = (e) => {
    if (e.key === "Enter") {
      if (e.target.id === "potbox") {
        setPot(e.target.value);
      } else if (e.target.id === "betbox") {
        setBet(e.target.value);
      }
    }
  };

  const potOdds = () => {
    if (pot && bet) {
      let potOdds = (bet / (pot + bet)) * 10000;
      return potOdds.toFixed(0);
    }
  };

  const [selectedOption, setSelectedOption] = useState("potOdds");

  const handleOptionChange = (e) => {
    if (e.target.id === "potOdds") {
      setSelectedOption("potOdds");
    } else if (e.target.id === "cardView") {
      setSelectedOption("cardView");
    }
  };

  return (
    <Container fluid className="board">
      <CloseButton className="clearButton" />
      <div className="radioButtons">
        <div className="radioTitle">Select Option</div>
        <div className="potOddsDiv">
          <input
            id="potOdds"
            name="radioOption"
            type="radio"
            defaultChecked={true}
            onChange={handleOptionChange}
          ></input>
          <label htmlFor="potOdds">Pot Odds</label>
        </div>
        <div className="cardViewDiv">
          <input
            id="cardView"
            name="radioOption"
            type="radio"
            onChange={handleOptionChange}
          ></input>
          <label htmlFor="cardView">Card View</label>
        </div>
      </div>
      {selectedOption === "potOdds" ? (
        <>
          <div className="numberInput">
            <div>
              <p>Pot is...</p>
              <input
                type="text"
                className="numberInput"
                placeholder="....."
                onKeyDown={potOddBoxes}
                id="potbox"
              />
            </div>
            <div>
              {" "}
              <p>You have to call...</p>
              <input
                type="text"
                className="numberInput"
                placeholder="....."
                onKeyDown={potOddBoxes}
                id="betbox"
              />
            </div>
            {potOdds ? (
              <div>
                <p>So you need...</p>
                <div className="potOddsResult">{potOdds()}%</div>
              </div>
            ) : null}
          </div>
        </>
      ) : null}
      {selectedOption === "cardView" ? (
        <>
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
            {turn ? (
              <>
                <>
                  <PHand
                    key="boardcard4"
                    getCardInfo={() => getCardInfo(card4Ref)}
                    ref={card4Ref}
                  />
                </>
                {river ? null :<>
                  <div className="boardCardUnfilled">
                    <div className="turnButton" onClick={() => setRiver(true)}>
                      <p>+</p>
                    </div>
                  </div>
                </>}
              </>
            ) : (
              <div className="boardCardUnfilled">
                <div className="turnButton" onClick={() => setTurn(true)}>
                  <p>+</p>
                </div>
              </div>
            )}
            {river ? (
              <PHand
                key="boardcard5"
                getCardInfo={() => getCardInfo(card5Ref)}
                ref={card5Ref}
              />
            ) : null}
          </Container>
          <Container fluid className="playerHand px-0 w-auto">
            <PHand
              key="usercard1"
              getCardInfo={getCardInfo}
              id="usercard1"
            />
            <PHand
              key="usercard2"
              getCardInfo={getCardInfo}
              id="usercard2"
              className="pcard2"
            />
          </Container>
        </>
      ) : null}
    </Container>
  );
}
export default Board;
