import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from './AppContext';
import Flashcard from './Flashcard';
import Testseite from "./TestSeite";

function FlashcardView() {
    const { lernmodus } = useParams();
    const { questions, generateQuestions, preparedQuestions, randomOrder
        , selectedMalreihe    } = useAppContext();
    const navigate = useNavigate();

    const [stack, setStack] = useState(preparedQuestions);
    const [cardState, setCardState] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);



    const handleNextCard = () => {
        if (currentQuestionIndex < stack.length - 1) {
            // hide die oberste Karte aus dem Stapel
            setCurrentQuestionIndex(currentQuestionIndex + 1);


        } else {
            // Alle Fragen wurden beantwortet
            //wartet 1 sekunden und leitet dann weiter
            setTimeout(() => {  navigate(`/results/${lernmodus}`); }, 1000);

        }
    };

    useEffect(() => {
        if (stack.length === 0) {
            // Wenn der Stapel leer ist, bedeutet das, dass alle Fragen beantwortet wurden
            navigate(`/results/${lernmodus}`);
        }
    }, [stack, navigate,  lernmodus]);


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {randomOrder ? 'Zufälliger Lernmodus': 'Geordneter Lernmodus' }
            </h1>
            <div className="relative flex max-w-xs mx-auto perspective mb-4 flashcard-container">
                {// Alle Fragen anzeigen und absteigend sorqieren
                    stack.map((question, index) => (
                    <Flashcard
                        key={index}
                        zindex={100-index}
                        question={question.questionText}
                        answer={question.answer.toString()}
                        onGone={() => { handleNextCard(); }}

                    />
                ))}
            </div>


        </div>
    );
}

export default FlashcardView;
