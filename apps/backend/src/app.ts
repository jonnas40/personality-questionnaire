import express, { Express } from 'express';
import { evaluateResult, getQuestions } from './service';
import cors from 'cors';

export const app: Express = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
  
app.get('/questions', (req, res) => {
    res.send(getQuestions());
});

app.post('/result', (req, res) => {
    res.send(evaluateResult(req.body));
});
  
