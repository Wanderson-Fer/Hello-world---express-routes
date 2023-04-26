import express from 'express';
import cors from 'cors';
import router from './routes.mjs';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(5000, () => {
    console.log('listening on http://localhost:5000');
});