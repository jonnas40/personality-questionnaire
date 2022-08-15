import { Question, Result } from "@personality-questionnaire/interfaces";

export const mockQuestion: Question[] = [{
    prompt: 'prompt1',
    answers: [{
      text: 'text1',
      value: 1
    }]
  },{
    prompt: 'prompt2',
    answers: [{
      text: 'text2',
      value: 1
    }]
  }];

export const mockResult: Result = {
  result: 'introvert'
}