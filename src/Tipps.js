import React from 'react';
import {Link} from "react-router-dom";

const Tipps = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4 w-full max-w-screen-md">
            <h1 className="text-3xl font-bold  text-purple-800  mb-4">Tipps</h1>
            <p className="text-2xl text-gray-800 m-4">Hier sind ein paar Tipps, wie du leichter lernen kannst:</p>
            <div className="text-xl text-left text-gray-800 mb-6">
                <ul className="list-disc list-outside mb-6 pl-6">
                    <li>Sage die Rechnungen mit der Lösung laut auf, während du sie im Karteikarten-Modus widerholst. Zum Beispiel: "3 mal 4 ist 12".</li>

                    <li>Übe die Aufgaben mit einem Freund oder einer Freundin.</li>

                    <li>Mache nach jeder Malreihe eine kürze Pause.</li>

                    <li>Mit dem Eingabefeld-Modus kannst du die messen, wie schnell du die Aufgaben lösen kannst. Du
                    kannst versuchen, deine Zeit zu verbessern oder gegen deine Freunde anzutreten.</li>

                    <li>Wenn du irgendwo zwei Zahlen siehst, kannst du sie miteinander multiplizieren. Zum Beispiel auf Autokennzeichen.</li>
                </ul>
            </div>
            <Link to="/home">
                <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg mt-4 text-2xl">
                    Zurück zum Menü
                </button>
            </Link>
        </div>
    );

};

export default Tipps;