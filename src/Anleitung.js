import React from 'react';
import {Link} from "react-router-dom";

const Anleitung = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4 w-full max-w-screen-md">
            <h1 className="text-4xl font-bold text-purple-800 mb-6">Anleitung</h1>
            <p className="text-2xl text-center text-gray-800 mb-6">
                Hier ist eine kurze Anleitung, wie du die App verwenden kannst:
            </p>
            <div className="text-xl text-left text-gray-800 mb-6">
                <ul className="list-disc list-outside mb-6 pl-6">
                    <li>Wähle eine Malreihe aus, die du üben möchtest.</li>
                    <li>Wähle aus, ob du die Aufgaben in zufälliger Reihenfolge üben möchtest.</li>
                    <li>Wähle einen Lernmodus aus, zum Beispiel Karteikarten-Modus oder Eingabefeld-Modus.</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Karteikarten-Modus</h2>
            <div className="text-xl text-left text-gray-800 mb-6">
                <ul className="list-disc list-outside mb-6 pl-6">
                    <li>Hier kannst du die gewählte Malreihe wiederholen.</li>
                    <li>Du siehst eine Karte mit einer Multiplikationsaufgabe.</li>
                    <li>Überlege dir die Antwort und tippe dann auf die Karte, um die richtige Lösung zu sehen.</li>
                    <li>Tippe nochmal, um zur nächsten Aufgabe zu gelangen.</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Eingabefeld-Modus</h2>
            <div className="text-xl text-left text-gray-800 mb-6">
                <ul className="list-disc list-outside mb-6 pl-6">
                    <li>Hier kannst du dein Wissen zur gewählten Malreihe testen.</li>
                    <li>Du bekommst eine Multiplikationsaufgabe gestellt.</li>
                    <li>Gib die Lösung in das Eingabefeld ein und tippe auf 'Weiter'.</li>
                    <li>Wenn du die richtige Lösung eingegeben hast, kommst du zur nächsten Aufgabe.</li>
                    <li>Sonst darfst du es nochmal versuchen.</li>
                    <li>Wenn du alle Aufgaben beantwortet hast, siehst du deine Ergebnisse.</li>
                </ul>
            </div>
            <p className="text-2xl text-center text-gray-800 mb-8">
                Viel Spaß beim Lernen und viel Erfolg!
            </p>
            <Link to="/home">
                <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg mt-4 text-2xl">
                    Zurück zum Menü
                </button>
            </Link>
        </div>
    );
};

export default Anleitung;
