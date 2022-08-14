import express, { Express } from 'express';
import { evaluateResult, getQuestions } from './service';

export const app: Express = express();
app.use(express.json())
  
app.get('/questions', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send(getQuestions());
});

app.post('/result', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
    res.send(evaluateResult(req.body.answers));
});
  
