import { Question, Result } from '@personality-questionnaire/interfaces';
import React, { useState } from 'react'
import { IoCheckmarkSharp, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import ActionButon from '../../../component/ActionButon';
import { postResults } from '../../../services/apiFetch.service';
import { mergeClassNames } from '../../../util/utils';
import styles from './TestSlide.module.css';

interface Props {
    questions: Question[]
}

function TestSlide({ questions }: Props) {
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
            {questions[currentQuestion].answers.map( (answer, index) => (
                <ActionButon 
                    key={index} 
                    style={answer.value === selected ? styles['selectedAnswer'] : ''} 
                    action={() => setSelected(answer.value)}>
                        {answer.text}
                </ActionButon>   
            ))}
        </div>
        <div className={styles['buttonContainer']}>
            {currentQuestion !== 0 ? 
            <ActionButon action={handlePreviousQuestion}>
                <IoChevronBackOutline size={32}/>
                Previous question
            </ActionButon> : 
            <div></div> }
            {currentQuestion === (questions.length - 1) ? 
                <ActionButon 
                    style={mergeClassNames(styles['nextButton'], styles['submitButton'])} 
                    isDisabled={!selected} 
                    action={handleSubmit}>
                        Submit
                        <IoCheckmarkSharp size={32}/>
                </ActionButon> : 
                <ActionButon 
                    style={styles['nextButton']} 
                    isDisabled={!selected} 
                    action={handleNextQuestion}>
                        Next question
                        <IoChevronForwardOutline size={32}/>
                </ActionButon>}
        </div>
    </div>
  )
};

export default TestSlide;