import express, { Express } from 'express';
import { evaluateResult, getQuestions } from './service';

export const app: Express = express();
app.use(express.json())
  
app.get('/questions', (req, res) => {
    res.send(getQuestions());
});

app.post('/result', (req, res) => {
    res.send(evaluateResult(req.body.answers));
});
  
