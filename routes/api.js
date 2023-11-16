const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load environment variables from .env file
require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    fname: String,
    lname: String,
    avatar: String
});

const User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Could not connect to MongoDB', error));

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.json({ message: 'hit the main ums route' });
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.json({ message: 'no user' });
        }
        if (user.password !== req.body.password) {
            return res.json({ message: 'wrong password' });
        }
        res.json({ message: 'success', user: user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-fname -lname -password');
        users.forEach(user => {
            if (user.avatar === "default") {
                user.avatar = 'temp_avatar.jpg';
            }
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/users/:user', async (req, res) => {
    try {
        const user = await User.findById(req.params.user);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
