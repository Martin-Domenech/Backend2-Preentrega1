import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import mongoose from './config/database.js';
import sessionsRouter from './routes/api/sessions.js';
import cookieParser from 'cookie-parser';
import viewsRouter from './routes/views.js';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import config from './config/config.js'

const app = express();

const PORT = config.port

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
