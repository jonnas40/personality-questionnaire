import express, { Express } from 'express';
import { getQuestions } from './service';

export const app: Express = express();
app.use(express.json())
const PORT = 8080;
  
app.get('/questions', (req, res) => {
    res.send(getQuestions());
});
  
app.listen(PORT, () => {
    console.log('Running on port 5000'); 
});