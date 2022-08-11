import express, { Express } from 'express';
import { getLog } from './service';

export const app: Express = express();
app.use(express.json())
const PORT = 8080;
  
app.get('/', (req, res) => {
    res.send(getLog());
});
  
app.listen(PORT, () => {
    console.log('Running on port 5000'); 
});