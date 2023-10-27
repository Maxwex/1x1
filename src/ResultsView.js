import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppContext} from './AppContext';
import Bewertung from "./Bewertung";

function ResultsView() {
    const {
        questions, correctAnswers, selectedMalreihe, elapsedTime, wrongAnswersCount
    } = useAppContext();
    const navigate = useNavigate();
    const {malreihe, lernmodus} = useParams();

    useEffect(() => {
            const handleBeforeUnload = (event) => {
                const confirmationMessage = "Wenn Sie die Seite verlassen, gehen alle ungespeicherten Daten verloren. Wirklich verlassen?";
                event.returnValue = confirmationMessage; // Standard für die meisten Browser
                return confirmationMessage; // Für einige ältere Browser
            };

            window.addEventListener("beforeunload", handleBeforeUnload);

            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }
        , []);

    const score = 3-(wrongAnswersCount-1)/2;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4">
            {lernmodus === 'eingabefeld' ? (
                <div className="mb-4 text-center">
                    <Bewertung bewertung={score} />
                    <h1 className="text-4xl font-bold text-purple-800 mb-8">
                        Die {selectedMalreihe}-er Reihe ist geschafft!
                    </h1>
                    <p className="text-xl text-gray-800 mb-4">
                        Du hast nur {wrongAnswersCount} mal daneben gelegen.
                    </p>
                    <p className="text-3xl text-black mb-4">
                        Deine Zeit: <span className="font-bold">{elapsedTime.toFixed(0)} Sekunden</span>
                    </p>
                </div>
            ) : (
                <div className="mb-4 text-center">
                    <h1 className="text-4xl font-bold text-purple-800 mb-4">
                        Du hast die ganze {selectedMalreihe}-er Reihe fleißig geübt.
                    </h1>
                    <p className="text-2xl text-gray-800 mb-4">
                        Und dir eine Pause verdient. ⚽
                    </p>
                </div>
            )}
            <button
                className="bg-purple-500 mt-4 w-full border-4 border-white text-white py-3 px-6 rounded-lg hover:bg-purple-600 cursor-pointer text-2xl"
                onClick={() => navigate('/home')}
            >
                Zum Hauptmenü
            </button>
        </div>

    );
}

export default ResultsView;

