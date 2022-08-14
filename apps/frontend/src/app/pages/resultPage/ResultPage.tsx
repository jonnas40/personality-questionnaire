import { Result } from '@personality-questionnaire/interfaces';
import React, { useEffect, useState } from 'react'
import { FaHome, FaUndoAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'
import { mergeClassNames } from '../../util/utils';
import styles from './ResultPage.module.css';

function ResultPage() {
  const { state } = useLocation();
  const { result } = state as Result;

  const backGround = (result === 'introvert' ? 
    styles['introvertBackground'] : 
    styles['extrovertBackground']);

  const [fade1, setFade1] = useState('preFadeIn');
  const [fade2, setFade2] = useState('preFadeIn');
  const [fade3, setFade3] = useState('preFadeIn');

  useEffect(() => {
    const timeout = setInterval(() => {
      setFade1('fade-in')
    }, 2000);
    return () => clearInterval(timeout)
  })

  useEffect(() => {
    const timeout = setInterval(() => {
      setFade2('fade-in')
    }, 2500);
    return () => clearInterval(timeout)
  })
  
  useEffect(() => {
    const timeout = setInterval(() => {
      setFade3('fade-in')
    }, 3000);
    return () => clearInterval(timeout)
  })

  return (
    <div className={ mergeClassNames(styles['container'], backGround)}>
      <h1>
        The results are in!
      </h1>
      <h2 className={styles[fade1]}>
        And it looks like you're an...
      </h2>
      <h1 className={styles[fade2]} style={{ textTransform: 'uppercase' }}>
        {result}!
      </h1>
      <div className={mergeClassNames(styles['endButtonContainer'], styles[fade3])}>
        <Link to={"/"} className={styles['endButton']}>
          Back to the home page
          <FaHome size={24}></FaHome>
        </Link>
        <Link to={"/test"} className={styles['endButton']}>
          Restart test
          <FaUndoAlt size={24}></FaUndoAlt>
        </Link>
      </div>
    </div>
  )
}

export default ResultPage