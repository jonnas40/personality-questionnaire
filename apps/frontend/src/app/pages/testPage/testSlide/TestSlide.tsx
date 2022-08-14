import { Question, Result } from '@personality-questionnaire/interfaces';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postResults } from '../../../services/apiFetch.service';
import styles from './TestSlide.module.css';

interface Props {
    question: Question[]
}


function TestSlide({ question }: Props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState<number[]>([]);
    const [selected, setSelected] = useState<number>(0);
    const navigate = useNavigate();

    function handleNextQuestion() {
        setScore((currentScore) => [...currentScore, selected]);
        setSelected(0);
        setCurrentQuestion(currentQuestion + 1);
    }

    function handlePreviousQuestion() {
        setScore((currentScore) => currentScore.splice(-1));
        setSelected(0)
        setCurrentQuestion(currentQuestion - 1);
    }

    function handleSubmit() {
        setScore((currentScore) => [...currentScore, selected]);
        console.log(score);
        postResults(score)
            .then((result) => {
                navigate('/result', { state: result as Result })
            })
        console.log(postResults(score));
    }    

  return (
    <div className={styles['slide']}>
        <div className={styles['promptContainer']}>
            <h3>
                {question[currentQuestion].prompt}
            </h3>
        </div>
        <div className={styles['answersContainer']}>
            {question[currentQuestion].answers.map( (answer) => (
                <button onClick={() => setSelected(answer.value)}>
                    {answer.text}
                </button>   
            ))}
        </div>
        {currentQuestion === (question.length - 1) ? 
            <button disabled={!selected} onClick={handleSubmit}>
                Submit
            </button> : 
            <button disabled={!selected} onClick={handleNextQuestion}>
                Next question
            </button>
        }
        {currentQuestion !== 0 ?<button onClick={handlePreviousQuestion}>
            Previous question
        </button> : <div></div> }
    </div>
  )
};

export default TestSlide;