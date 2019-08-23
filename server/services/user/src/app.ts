import express from 'express';
import routeHandler from './routes';

const app = express();

app.use(express.static(`${__dirname}/../assets`));
app.use('/', routeHandler);

export default app;
