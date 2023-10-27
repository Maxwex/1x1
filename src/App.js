// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Importiere die Auswahlmenüseite
import Flashcard from "./Flashcard";
import FlashcardView from "./FlashcardView";
import {AppProvider} from "./AppContext";
import EingabefeldView from "./EingabefeldView";
import ResultsView from "./ResultsView";
import ModeSwitch from "./ModeSwitch";
import LandingPage from "./LandingPage"; // Importiere die Kartenansichtseite



function App() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50">
            <AppProvider>
                <Routes>

                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/:lernmodus" element={<ModeSwitch/>}/>
                    <Route path="/results/:lernmodus" element={<ResultsView/>}/>

                </Routes>
            </AppProvider>
        </div>

    );
}

export default App;
