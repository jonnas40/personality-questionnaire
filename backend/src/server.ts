import express, { Express } from 'express';
import { evaluateResult, getQuestions } from './service';

export const app: Express = express();
app.use(express.json())
const PORT = 8080;
  
app.get('/questions', (req, res) => {
    res.send(getQuestions());
});

app.post('/result', (req, res) => {
    res.send(evaluateResult(req.body.answers));
});
  
app.listen(PORT, () => {
    console.log('Running on port 5000'); 
});