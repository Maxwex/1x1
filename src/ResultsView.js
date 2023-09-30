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


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
            <Bewertung bewertung={3}/>
            {lernmodus === 'eingabefeld' ? (
                <div className="mb-4">
                    <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
                        Die {selectedMalreihe}-er Reihe ist geschafft!
                    </h1>

                    <p className="text-xl text-gray-800 mb-2">
                        Du hast nur {wrongAnswersCount} mal daneben gelegen.
                    </p>
                    <p className="text-2xl text-black mb-2">
                        {// Berechne die benötigte Zeit ohne nachkommastelle und gib sie hier aus

                        }

                        Deine Zeit: <span className={"font-bold text-3xl "}>
                {elapsedTime.toFixed(0)
                }</span> Sekunden
                    </p>

                </div>


            ) : (
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Du hast die ganze {selectedMalreihe}-er Reihe fleissig geübt.
                    </h1>
                    <p className="text-xl text-gray-800 mb-2">
                        Und dir eine Pause verdient. ⚽
                    </p>
                </div>
            )}
            <button
                className="bg-blue-500 mt-4 w-full border-4 border-white
                text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                onClick={() => navigate('/home')}
            >
                Zum Hauptmenü
            </button>
        </div>
    );
}

export default ResultsView;

