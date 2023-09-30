import React, { useState, useEffect } from 'react';
import './flashcard.css'; // Stile importieren
import FlashcardMenu from './FlashcardMenu';
import Flashcard from './Flashcard';
import {useParams} from "react-router-dom";
import FlashcardView from "./FlashcardView";
import EingabefeldView from "./EingabefeldView";
import {useAppContext} from "./AppContext";

const malreihen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FlashcardApp() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [shuffledCards, setShuffledCards] = useState([]);
    const { selectedMalreihe, modus } = useParams();
    const [questions, setQuestions] = useAppContext()
    function shuffleArray(malreiheCards) {
    const shuffled = [...malreiheCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
    // Funktion zum Generieren aller Fragen und Antworten für die 1x1-Malreihen.




    const goToNextCard = () => {
        if (currentCardIndex < shuffledCards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            setCurrentCardIndex(0);
        }
    };

    return (
        <div>
            {modus === 'karten' ? (
                <FlashcardView malreihe={selectedMalreihe} />
            ) : modus === 'eingabefeld' ? (
                <EingabefeldView malreihe={selectedMalreihe} questions={questions} />
            ) : null}
            <div className="mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={goToNextCard}
                    disabled={!selectedMalreihe}
                >
                    Nächste Karte
                </button>
            </div>
        </div>
    );
}

export default FlashcardApp;
