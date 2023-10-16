import React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';

function InfoModal(props) {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Poker Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Here is some helpful information about poker:</p>
                <ul>
                    <li>A hand in poker consists of five cards.</li>
                    <li>The best possible 5 cards at showdown* wins. <small>(after all rounds of betting are complete.)*</small></li>
                    <li>In poker there are 52 cards. Made up from four suits* of 13 cards <small>(clubs ♧, diamonds ♢, hearts ♡ or spades ♤)*</small></li>
                    <li>"Outs" are the number of cards that can improve your hand into a winner.</li>
                    <li>For example: if your opponent has a pair of 8s and you have no pair - but hold a card that would make a higher pair (e.g. a Jack). The number of those cards left in the deck would be your outs, giving you 3 outs.</li>
                    <li>For information regarding hand strengths please <a rel="noreferrer" target='_blank' href="https://www.888poker.com/magazine/sites/magazine.888poker.com/files/inline-images/TS-48071%20CTV%20Mapping%20Project-Poker%20Hands%20PDF%20_%20COM1024_1-1625118990510_tcm1488-523987_0.webp">follow this link.</a></li>
                </ul>
            </Modal.Body>
        </Modal>
    );
}

export default InfoModal;
