import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { LERNMODI } from './LERNMODI'; // Importiere die Lernmodi-Konfiguration

function HomePage() {
    const navigate = useNavigate();
    const { setSelectedMalreihe, setLernmodus, selectedMalreihe,
        setRandomOrder,
        randomOrder,
    } = useAppContext();
    const [selectedLernmodus, setSelectedLernmodus] = useState(LERNMODI.KARTEIKARTEN); // Standardmäßig Karteikarten-Modus auswählen

    const malreihen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        setSelectedMalreihe(1);
    }
    , []);
    const handleLernmodusSelection = (lernmodus) => {
        // Hier kannst du die ausgewählte Malreihe, den Lernmodus und die generierten Fragen speichern und zur entsprechenden Ansicht weiterleiten.
        setLernmodus(lernmodus);
        navigate(lernmodus.path); // Leite zur ausgewählten Lernmodus-Ansicht weiter
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Wähle eine Malreihe</h1>
            <div className="grid grid-cols-2 gap-2 w-full mb-4">
                {malreihen.map((malreihe) => (
                    <button
                        key={malreihe}
                        className={`w-full py-2 px-4 rounded   cursor-pointer bg-blue-500 hover:bg-blue-600 ${
                            // Füge hier eine Bedingung hinzu, um den ausgewählten Modus zu überprüfen und entsprechende Styles anzuwenden
                            selectedMalreihe === malreihe && 'bg-blue-700 text-white '
                        }`}
                        onClick={() => setSelectedMalreihe(malreihe)}
                    >
                        {malreihe}
                    </button>
                ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Wähle die Reihenfolge</h2>
            <div className="grid grid-cols-2 gap-0 bg-gray-200 p-2 rounded w-full mb-4">
                {/* Toggle switch für die Reihenfolge-Auswahl */}
                <button className={`w-full py-2 px-4 rounded cursor-pointer ${!randomOrder ? 'bg-green-500':'bg-gray-500'} `}
                        onClick={() => setRandomOrder(false)}>
                    Geordnet
                </button>
                <button className={`w-full py-2 px-4 rounded cursor-pointer ${randomOrder ? 'bg-green-500':'bg-gray-500'}`}
                        onClick={() => setRandomOrder(true)}>
                    Zufällig
                </button>

            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">Wähle einen Spielmodus</h1>

            <div className="grid grid-cols-1 gap-2 w-full justify-center items-center">
                {/* Toggle für die Lernmodus-Auswahl */}

                {Object.values(LERNMODI).map((lernmodus) => (
                    <button
                        key={lernmodus.name}
                        className={`w-full py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 click:bg-green-700 text-white
                         cursor-pointer `}
                        onClick={() => handleLernmodusSelection(lernmodus)}
                    >
                        {lernmodus.name}
                    </button>
                ))}
            </div>
            {/* ... (Rest des Codes bleibt gleich) ... */}
        </div>
    );
}

export default HomePage;
