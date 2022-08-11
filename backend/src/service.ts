import { QUESTIONS } from './data/question.data';
import { Question } from './models/question';

export function getQuestions(): Question[] {
    return QUESTIONS;
}