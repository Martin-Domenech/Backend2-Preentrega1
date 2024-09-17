import { Router } from 'express';
import { authorization, passportCall } from '../utils.js';


const router = Router();


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/current', passportCall('jwt'), authorization('user'), (req, res) => {
    res.render('current', { user: req.user });
})

export default router;
 