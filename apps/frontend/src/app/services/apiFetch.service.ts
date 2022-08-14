import { Question, Result } from "@personality-questionnaire/interfaces";

const API_URL = 'http://localhost:8080';

export async function fetchQuestions(): Promise<Question[]> {
    const response = await fetch(`${API_URL}/questions`);
    if (!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`);
    return response.json();
  };

  export async function postResults(answers: number[]): Promise<Result> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const request = {
      method: 'POST',
      body: JSON.stringify(answers),
      headers: myHeaders,
    };
  
    const response = await fetch(`${API_URL}/result`, request);
    if (!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`);
    return response.json();
  };