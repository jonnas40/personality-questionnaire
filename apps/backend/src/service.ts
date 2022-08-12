import { QUESTIONS } from '@personality-questionnaire/data';
import { Question } from '@personality-questionnaire/interfaces';

export function getQuestions(): Question[] {
    return QUESTIONS;
}

export function evaluateResult(answers: number[]) {
    return {
        result: answers.reduce((previous, current) => previous += current, 0)
    };
}