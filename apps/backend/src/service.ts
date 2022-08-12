import { QUESTIONS } from './data/question.data';
import { Question } from './interface/question.inteface';

export function getQuestions(): Question[] {
    return QUESTIONS;
}

export function evaluateResult(answers: number[]) {
    return {
        result: answers.reduce((previous, current) => previous += current, 0)
    };
}