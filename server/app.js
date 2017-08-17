import express from 'express';
import routes from './routes';
import config from './config';

var app = express();
config(app);
routes(app);

app.listen(app.get('port') || 3000, function () {
    console.log(`Listening in port ${app.get('port') || 3000}`);
});

