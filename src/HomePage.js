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
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4 w-full max-w-screen-md">
            <div className="flex items-center mb-8">
                <label className="mr-4 text-purple-800">Zufällige Ordnung</label>
                <div className={`relative w-14 h-8 rounded-full transition duration-300 ease-in-out ${
                    randomOrder ? 'bg-purple-800' : 'bg-purple-300'
                }`}
                     onClick={() => setRandomOrder(!randomOrder)}>
                    <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition duration-300 ease-in-out transform ${
                        randomOrder ? 'translate-x-full bg-white' : 'bg-white'
                    }`} />
                </div>
            </div>
            <h1 className="text-2xl font-bold text-purple-800 mb-6">Wähle eine Malreihe</h1>
            <div className="grid grid-cols-2 gap-2 w-full mb-8">
                {malreihen.map((malreihe) => (
                    <button
                        key={malreihe}
                        className={`w-full py-2 px-8 rounded-lg border border-purple-500 text-purple-800 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out ${
                            selectedMalreihe === malreihe && 'bg-purple-500 text-white'
                        }`}
                        onClick={() => setSelectedMalreihe(malreihe)}
                    >
                        {malreihe}
                    </button>
                ))}
            </div>

            <h1 className="text-2xl font-bold text-purple-800 mb-6">Wähle einen Spielmodus</h1>
            <div className="grid grid-cols-1 gap-4 w-full justify-center items-center">
                {Object.values(LERNMODI).map((lernmodus) => (
                    <button
                        key={lernmodus.name}
                        className={`shadow-md bg-purple-500 w-full py-4 px-8 rounded-lg border border-purple-500 text-purple-100 hover:bg-purple-200 hover:text-purple-800 transition duration-300 ease-in-out`}
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
