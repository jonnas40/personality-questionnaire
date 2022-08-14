import { Question, Result } from '@personality-questionnaire/interfaces';
import React, { useState } from 'react'
import { IoCheckmarkSharp, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { postResults } from '../../../services/apiFetch.service';
import { mergeClassNames } from '../../../util/utils';
import styles from './TestSlide.module.css';

interface Props {
    question: Question[]
}


function TestSlide({ question: questions }: Props) {
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
        postResults(score)
            .then((result) => {
                navigate('/result', { state: result as Result })
            })
    }    

  return (
    <div className={styles['slide']}>
        <div className={styles['slideHeader']}>
            <h2 style={{ width: '100%' }}>
                {questions[currentQuestion].prompt}
            </h2>
            <h2 style={{ whiteSpace: 'nowrap' }}>
                { currentQuestion + 1 } / { questions.length }
            </h2>
        </div>
        <div className={styles['answersContainer']}>
            {questions[currentQuestion].answers.map( (answer) => (
                <button className={answer.value === selected ? styles['selectedAnswer'] : ''} onClick={() => setSelected(answer.value)}>
                    {answer.text}
                </button>   
            ))}
        </div>
        <div className={styles['buttonContainer']}>
            {currentQuestion !== 0 ?<button onClick={handlePreviousQuestion}>
                <IoChevronBackOutline size={32}/>
                Previous question
            </button> : <div></div> }
            {currentQuestion === (questions.length - 1) ? 
                <button className={mergeClassNames(styles['nextButton'], styles['submitButton'])} disabled={!selected} onClick={handleSubmit}>
                    Submit
                    <IoCheckmarkSharp size={32}/>
                </button> : 
                <button className={styles['nextButton']} disabled={!selected} onClick={handleNextQuestion}>
                    Next question
                    <IoChevronForwardOutline size={32}/>
                </button>}
        </div>
    </div>
  )
};

export default TestSlide;