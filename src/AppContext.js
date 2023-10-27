import React, {createContext, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [questions, setQuestions] = useState([]);
    const [selectedMalreihe, setSelectedMalreihe] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [lernmodus, setLernmodus] = useState('geordnet');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [randomOrder, setRandomOrder] = useState(false);

    const generateQuestions = () => {
        const questions = [];
        for (let malreihe = 1; malreihe <= 10; malreihe++) {
            for (let multiplier = 1; multiplier <= 10; multiplier++) {
                const questionText = `${malreihe} x ${multiplier} =`;
                const answer = malreihe * multiplier;
                questions.push({ id: questions.length + 1, questionText, answer, malreihe });
            }
        }
        return questions;
    };

   const getQuestionsForMode = () => {
       const questions = filterQuestionsByMalreihe( );
        if (!randomOrder) {
            return questions;
        } else {
            return shuffle(questions);
        }
    }
    const shuffle = (array) => {
       const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const filterQuestionsByMalreihe = () => {
        return questions.filter((question) => question.malreihe === selectedMalreihe);
    };

    useEffect(() => {
       setQuestions(generateQuestions());
    }
    , []);

 ;
    const contextValue = {
        questions,
        randomOrder,
        setRandomOrder,
        selectedMalreihe,
        setElapsedTime,
        elapsedTime,
        setSelectedMalreihe,
        currentQuestionIndex,
        wrongAnswersCount,
        setWrongAnswersCount,
        lernmodus,
        setLernmodus,
        preparedQuestions: getQuestionsForMode(),
        generateQuestions,
        filterQuestionsByMalreihe,
        // Weitere Funktionen zur Zustandsverwaltung
    };

    return <AppContext.Provider value={contextValue}
    >

        {children}</AppContext.Provider>;
}
