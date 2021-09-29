import React from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";

const App = () => {

    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }
    return (
        <div className="App">
            <h1>REACT QUIZ</h1>
            <button className={"start"} onClick={startTrivia}>
                Start
            </button>
            <p>
                Score:
            </p>
            <p>
                Loading Question...
            </p>
            <QuestionCard/>
            <button className={"next"} onClick={nextQuestion}>
                Next
            </button>
        </div>
    );
}

export default App;
