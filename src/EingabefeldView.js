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
    const [correct, setCorrect] = useState(false);
    const [stack, setStack] = useState(preparedQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(stack[currentQuestionIndex] );
    useEffect(() => {
        // Starte die Zeitmessung, wenn die Komponente geladen wird
        const startTime = Date.now();
        setWrongAnswersCount(0);
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
           setCorrect(true);
            handleNextQuestion();
        } else if (userAnswer === '') {
            // Keine Antwort eingegeben
            setResultText('Gib eine Antwort ein.');
        } else {
            // Die Antwort ist falsch
            setWrongAnswersCount(wrongAnswersCount + 1);
            setCorrect(false)
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4 rounded-lg shadow-lg w-full max-w-screen-md">
            <h1 className="text-4xl font-bold text-purple-800 mb-6">Eingabefeld-Modus</h1>
            {currentQuestion && (
                <div className={`bg-white relative rounded-lg p-6 shadow-md text-center w-full max-w-md ${showResult && (userAnswer === currentQuestion.correctAnswer ? 'border-green-500' : 'border-red-500')}`}>
                    <p className="text-3xl text-purple-800 font-bold mb-4">{currentQuestion.questionText}</p>
                    <input
                        type="text"
                        className={`w-full p-3 border-2 border-gray-300 rounded-md mb-6 text-3xl focus:outline-none ${
                            showResult && (  correct ? 'border-green-500 ' : 'border-4 border-red-500 ')
                        }`}
                        placeholder="Deine Antwort eingeben"
                        value={userAnswer}
                        readOnly={showResult}
                    />
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                            <button
                                key={number}
                                className={`bg-purple-100 border border-purple-300 text-purple-800 py-3 px-6 rounded-lg hover:bg-purple-200 cursor-pointer text-3xl`}
                                onClick={() => handleNumberClick(number)}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            className={`col-span-2 border border-purple-300 text-purple-800 py-3 px-6 rounded-lg hover:bg-purple-100  cursor-pointer text-3xl`}
                            onClick={handleDelete}
                        >
                            Löschen
                        </button>
                    </div>
                    <div className="mb-6">
                        <button
                            className={`w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 cursor-pointer text-3xl ${
                                showResult && 'cursor-not-allowed bg-purple-300 hover:bg-purple-300'
                            }`}
                            onClick={handleCheckAnswer}
                            disabled={showResult}
                        >
                            Weiter
                        </button>
                    </div>
                    <div className={`result-text text-xl font-bold text-purple-800 ${showResult ? 'show' : 'hidden'}`}>
                        {resultText}
                    </div>
                </div>
            )}
        </div>

    );
}

export default EingabefeldView;
