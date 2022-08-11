import { QUESTIONS } from './data/question.data';
import { Question } from './models/question';

export function getQuestions(): Question[] {
    return QUESTIONS;
}

export function evaluateResult(answers: number[]) {
    return {
        result: answers.reduce((previous, current) => previous += current, 0)
    };
}