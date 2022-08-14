export interface Question {
    prompt: string,
    answers: Answer[]
}

interface Answer {
    text: string,
    value: number
}

export interface Result {
    finalScore: number,
    result: string
}