import React, {useEffect, useState} from 'react';
import './flashcard.css'; // Stile importieren

// Flashcard-Komponente
function Flashcard({ question, answer, onGone, zindex}) {
    // Zustand, um zu verfolgen, ob die Karte umgedreht ist
    const [state, setState] = useState('front');
    const [hidden, setHidden] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const handleCardClick = () => {
        // Karte umdrehen
        if (state === 'front') {
            setState('back');
            setFlipped(true);
        }else if (state === 'back') {
            setState('gone');
            setHidden(true);
            onGone();
        }
    }


    // Funktion zum Umkehren der Karte bei einem Klick

    const z = `z-[${zindex}]`;
    return (
        <div className={ `${z}  absolute max-w-xs mx-auto my-4 perspective ${hidden ? 'gone' : ''} } flashcard-container ${flipped ? 'flipped' : ''}`}
             style={{zIndex: zindex}}
             onClick={handleCardClick}



        >
            <div className="flashcard ">
                <div className="front rounded-xl">
                    <p className="text-3xl font-bold">{question}</p>
                </div>
                <div className="back rounded-xl">
                    <p className="text-3xl font-bold ">{question+" "+answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
