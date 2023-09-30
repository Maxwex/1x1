import EingabefeldView from "./EingabefeldView";
import FlashcardView from "./FlashcardView";
import {useParams} from "react-router-dom";

function ModeSwitch() {
    const {lernmodus, malreihe} = useParams();


    return (
        <div>
            {lernmodus === 'eingabefeld' ? (
                <EingabefeldView/>
            ) : (
                <FlashcardView/>
            )}

        </div>

    );
}

export default ModeSwitch;