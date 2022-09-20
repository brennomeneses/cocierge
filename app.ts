import express from 'express';
import routes from './src/routes';

const PORT = 3007;
const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.clear();
    console.log(`Server Running on http://localhost:${PORT}`);
});
