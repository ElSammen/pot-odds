import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import PHand from "./Player/PHand";
import InfoModal from "./infoModal";

function OutsQuiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ inputAnswer: "" });
  const [stateIndex, setStateIndex] = useState(0);

  const SubmitAnswer = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Enter key pressed");
      answerSubmit();
    }
  };

  const answerSubmit = () => {
    console.log(formData.inputAnswer);
    console.log(boardState.correctAnswer);
    console.log(stateIndex);
    if (formData.inputAnswer === boardState.correctAnswer) {
      formData.inputAnswer = "";
      console.log("Correct");
      setStateIndex(stateIndex + 1);
      console.log(stateIndex);
      setBoardState(stateArray[stateIndex]);
    } else {
      console.log("Incorrect");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showModal = () => {
    setShow(true);
  };

  const stateArray = [
    {
      card1: { suit: "spade", value: "10" },
      card2: { suit: "heart", value: "2" },
      card3: { suit: "club", value: "4" },
      card4: { suit: "", value: "" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "spade", value: "ace" },
      pcard2: { suit: "heart", value: "king" },
      vcard1: { suit: "club", value: "queen" },
      vcard2: { suit: "heart", value: "queen" },
      correctAnswer: "6",
      answerDescription: "Correct! 6 outs, 3 Kings and 3 Aces",
    },
    //////////////////////////////
    {
      card1: { suit: "club", value: "3" },
      card2: { suit: "heart", value: "6" },
      card3: { suit: "heart", value: "jack" },
      card4: { suit: "spade", value: "5" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "heart", value: "9" },
      pcard2: { suit: "heart", value: "10" },
      vcard1: { suit: "club", value: "jack" },
      vcard2: { suit: "diamond", value: "queen" },
      correctAnswer: "9",
      answerDescription: "Correct! 9 outs, any heart would give you a flush",
    },
    //////////////////////////////
    {
      card1: { suit: "spade", value: "4" },
      card2: { suit: "diamond", value: "4" },
      card3: { suit: "club", value: "2" },
      card4: { suit: "club", value: "5" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "spade", value: "2" },
      pcard2: { suit: "heart", value: "ace" },
      vcard1: { suit: "diamond", value: "3" },
      vcard2: { suit: "spade", value: "6" },
      correctAnswer: "4",
      answerDescription:
        "Correct! As the opponent already has a straight, only 4 outs(2 twos, 2 fours) remain to give you a full house making a stronger hand",
    },
    //////////////////////////////
    {
      card1: { suit: "club", value: "Queen" },
      card2: { suit: "spade", value: "10" },
      card3: { suit: "diamond", value: "Jack" },
      card4: { suit: "", value: "" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "heart", value: "king" },
      pcard2: { suit: "diamond", value: "9" },
      vcard1: { suit: "heart", value: "Queen" },
      vcard2: { suit: "heart", value: "Queen" },
      correctAnswer: "4",
      answerDescription:
        "Correct! Since a Queen would give the opponent four of a kind, only an 8 would win you the hand with a straight.",
    },
    //////////////////////////////
    {
      card1: { suit: "spade", value: "" },
      card2: { suit: "", value: "" },
      card3: { suit: "", value: "" },
      card4: { suit: "", value: "" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "", value: "" },
      pcard2: { suit: "", value: "" },
      vcard1: { suit: "club", value: "queen" },
      vcard2: { suit: "heart", value: "queen" },
      correctAnswer: "",
      answerDescription: "Correct! ",
    },
    //////////////////////////////
    {
      card1: { suit: "spade", value: "jack" },
      card2: { suit: "spade", value: "10" },
      card3: { suit: "spade", value: "9" },
      card4: { suit: "diamond", value: "ace" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "spade", value: "8" },
      pcard2: { suit: "diamond", value: "5" },
      vcard1: { suit: "spade", value: "ace" },
      vcard2: { suit: "heart", value: "9" },
      correctAnswer: "2",
      answerDescription:
        "Correct! Only a spade 7 or Queen for a straight flush, as the opponent holds the Ace of spades and already has two pair.",
    },
    //////////////////////////////
    {
      card1: { suit: "spade", value: "" },
      card2: { suit: "", value: "" },
      card3: { suit: "", value: "" },
      card4: { suit: "", value: "" },
      card5: { suit: "", value: "" },
      pcard1: { suit: "", value: "" },
      pcard2: { suit: "", value: "" },
      vcard1: { suit: "club", value: "queen" },
      vcard2: { suit: "heart", value: "queen" },
    },
  ];

  const [boardState, setBoardState] = useState(null);

  const startQuiz = () => {
    console.log("start quiz");
    setQuizStarted(true);
    setBoardState(stateArray[0]);
  };

  return (
    <Container>
      {quizStarted === false ? (
        <Container fluid className="quizIntro p-3">
          <InfoModal show={show} onHide={() => setShow(false)} />
          <div style={{ position: "relative" }}>
            <p className="infoButton" onClick={() => showModal()}>
              ⓘ
            </p>
          </div>
          <h1>Outs Quiz</h1>
          <p>
            Test your poker know-how, see if you can figure out the number of
            outs you have in the following hands.
          </p>
          <Button
            variant="dark"
            size="lg"
            block
            onClick={startQuiz}
            className="mt-2"
          >
            Start Quiz
          </Button>
        </Container>
      ) : null}

      {quizStarted ? (
        <>
          <Container className="quizQuestion">
            <Form onSubmit={answerSubmit}>
              <Form.Label>Question</Form.Label>
              <Form.Group className="mb-3" controlId="inputAnswer">
                <p>How many outs do you have?</p>
                <Form.Control
                  style={{ width: "5rem", margin: "auto", textAlign: "center" }}
                  type="text"
                  placeholder="#?"
                  name="inputAnswer"
                  value={formData.inputAnswer}
                  onChange={handleChange}
                  onKeyDown={SubmitAnswer}
                />
                <div className="answerSpoiler">
                  <details>
                    <summary className="answerSpoilerCover">
                      Struggling?
                    </summary>
                    <p>{boardState.correctAnswer}</p>
                  </details>
                </div>
              </Form.Group>
            </Form>
          </Container>
          <Container className="oppCards">
            <label className="oppCardsLabel" htmlFor="oppCards">
              Opponent's Hand
            </label>
            <PHand
              value={boardState.vcard1.value}
              suit={boardState.vcard1.suit}
              rotation={"rotate(-4deg)"}
            />
            <PHand
              value={boardState.vcard2.value}
              suit={boardState.vcard2.suit}
              rotation={"rotate(4deg)"}
            />
          </Container>
          <div className="boardCards">
            <PHand
              value={boardState.card1.value}
              suit={boardState.card1.suit}
            />
            <PHand
              value={boardState.card2.value}
              suit={boardState.card2.suit}
            />
            <PHand
              value={boardState.card3.value}
              suit={boardState.card3.suit}
            />
            <PHand />
            <PHand />
          </div>
          <div className="playerHand">
            <label className="playerHandLabel" htmlFor="playerHand">
              Your Hand
            </label>
            <PHand
              value={boardState.pcard1.value}
              suit={boardState.pcard1.suit}
              rotation={"rotate(-4deg)"}
            />
            <PHand
              value={boardState.pcard2.value}
              suit={boardState.pcard2.suit}
              rotation={"rotate(4deg)"}
            />
          </div>
        </>
      ) : null}
    </Container>
  );
}

export default OutsQuiz;
