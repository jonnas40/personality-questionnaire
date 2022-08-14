import { Result } from '@personality-questionnaire/interfaces';
import React from 'react'
import { useLocation } from 'react-router-dom'

function ResultPage() {
  const { state } = useLocation();
  const { finalScore, result } = state as Result;

  console.log(finalScore);

  console.log(result);
  

  return (
    <div>
      <h1>
        Your final score is {finalScore}
      </h1>
      <h2>
        That makes you an {result}!
      </h2>
    </div>
  )
}

export default ResultPage