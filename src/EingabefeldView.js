import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from './AppContext';

function EingabefeldView() {
    const {  setElapsedTime,
        selectedMalreihe, filterQuestionsByMalreihe, setWrongAnswersCount, wrongAnswersCount, preparedQuestions
    } = useAppContext();
    const { lernmodus } = useParams();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [resultText, setResultText] = useState('');

    const [stack, setStack] = useState(preparedQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(stack[currentQuestionIndex] );
    useEffect(() => {
        // Starte die Zeitmessung, wenn die Komponente geladen wird
        const startTime = Date.now();
        return () => {
            // Beende die Zeitmessung, wenn die Komponente entladen wird
            const endTime = Date.now();
            const elapsedTime = (endTime - startTime) / 1000;
            setElapsedTime(elapsedTime);
        };
    }
    , [setElapsedTime]);

    const handleCheckAnswer = () => {
        if (userAnswer === currentQuestion.answer.toString()) {
            // Die Antwort ist korrekt
            setResultText('Richtige Antwort!');
            handleNextQuestion();
        } else if (userAnswer === '') {
            // Keine Antwort eingegeben
            setResultText('Gib eine Antwort ein.');
        } else {
            // Die Antwort ist falsch
            setWrongAnswersCount(wrongAnswersCount + 1);
            setResultText('Versuche es noch einmal.');
            setUserAnswer('');
        }

        setShowResult(true);

        // Nach 2 Sekunden die Anzeige ausblenden und zur nächsten Frage wechseln
        setTimeout(() => {
            setShowResult(false);
        }, 1000);
    };

    const handleNextQuestion = () => {
        // Zur nächsten Frage wechseln
        if (currentQuestionIndex < stack.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setCurrentQuestion(stack[currentQuestionIndex + 1]);

        } else {
            // Alle Fragen wurden beantwortet
            navigate(`/results/${lernmodus}`);
        }
    };

    const handleNumberClick = (number) => {
        // Füge die Zahl an die Antwort an

        if (userAnswer.length < 3) {
            if (userAnswer === '0') {
                // Lösche die führende Null
                setUserAnswer(number.toString());
                return;
            }
            setUserAnswer(userAnswer + number.toString());
        }
    };

    const handleDelete = () => {
        // Lösche das letzte Zeichen aus der Antwort
        setUserAnswer(userAnswer.slice(0, -1));
    };

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center bg-blue-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Eingabefeld-Modus</h1>
            {currentQuestion && (
                <div className="bg-white relative rounded-lg p-4 shadow-md text-center">
                    <p className="text-3xl mb-4">{currentQuestion.questionText}</p>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-3xl"
                        placeholder="Deine Antwort eingeben"
                        value={userAnswer}
                        readOnly={showResult}
                    />
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                            <button
                                key={number}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer text-3xl"
                                onClick={() => handleNumberClick(number)}
                            >
                                {number}
                            </button>
                        ))  }
                            <button
                        className="col-span-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 cursor-pointer text-3xl"
                        onClick={handleDelete}
                    >
                        Löschen
                    </button>
                    </div>
                    <div className=" mt-4">

                        <button
                            className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 cursor-pointer text-3xl"
                            onClick={handleCheckAnswer}
                            disabled={showResult}
                        >
                            Weiter
                        </button>
                    </div>
                    <div className={`result-text ${showResult ? 'show' : ''}`}>
                        {resultText}

                    </div>
                </div>
            )}
        </div>
    );
}

export default EingabefeldView;
