import React from 'react';

function ModeSelection({ selectedMode, onSelectMode }) {
    return (
        <div>
            <p className="text-lg font-semibold">Wähle einen Modus:</p>
            <div className="flex space-x-4">
                <button
                    className={`px-3 py-2 rounded-md ${
                        selectedMode === 'Kartenmodus' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                    onClick={() => onSelectMode('Kartenmodus')}
                >
                    Kartenmodus
                </button>
                <button
                    className={`px-3 py-2 rounded-md ${
                        selectedMode === 'Eingabefeldmodus' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                    onClick={() => onSelectMode('Eingabefeldmodus')}
                >
                    Eingabefeldmodus
                </button>
            </div>
        </div>
    );
}

export default ModeSelection;
