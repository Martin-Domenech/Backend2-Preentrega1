import { Router } from 'express';
import User from '../../models/user.js';
import { createHash, isValidPassword } from '../../utils.js';
import passport from 'passport';
import jwt from 'jsonwebtoken'
import userService from '../../models/user.js'
import config from '../../config/config.js'

const router = Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    try {
        let user = await userService.findOne({ email });
        if (user) return res.status(400).send('El usuario ya existe');

        const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
        };

        let result = await userService.create(newUser);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send(`Error al crear el usuario: ${error.message}`);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(404).send('Usuario no encontrado')
        if (!isValidPassword(user, password)) return res.status(404).send('Datos incorrectos')
        const { password: _, ...userData } = user.toObject();

        let token = jwt.sign({ ...userData}, config.secret_key, { expiresIn: "24h" })

        res.cookie('authToken', token, {
            httpOnly: true,
            maxAge: 60*60*1000
        })
        
        console.log(`token: ${token}`)
        res.redirect('/current')
    } catch (err) {
        console.error(err)
    }
})


router.post('/logout', (req, res) => {
    try{
        res.clearCookie('authToken')
        res.redirect('/login')
    } catch(err){
        console.error(err)
    }   

})

export default router
