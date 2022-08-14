import React, { useEffect, useState } from 'react'
import { fetchQuestions } from '../../services/apiFetch.service';
import TestSlide from './testSlide/TestSlide';
import styles from './TestPage.module.css';

function TestPage() {
    const [questions, setQuestions] = useState({});


    useEffect(() => {    
        fetchQuestions()
        .then( data => setQuestions(data));
    }, []);
    
    if (Array.isArray(questions)) {
        return (
            <div className={styles['container']}>
                <TestSlide question={questions}></TestSlide>
            </div>
          )      
    }
    return (<div></div>)
}

export default TestPage;