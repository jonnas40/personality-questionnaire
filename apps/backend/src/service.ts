import { QUESTIONS } from '@personality-questionnaire/data';
import { Question, Result } from '@personality-questionnaire/interfaces';

export function getQuestions(): Question[] {
    return QUESTIONS;
}

export function evaluateResult(answers: number[]): Result {
    const finalScore = answers.reduce((previous, current) => previous += current, 0); 
    return {
        result: finalScore > 0 ? 'extrovert' : 'introvert'
    };
}