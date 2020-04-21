const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const restricted = require('../auth/restricted-middleware.js');

router.use('/auth', authRouter); //uses the authRouter at '/auth' endpoint
router.use('/users', restricted, usersRouter); //uses the usersRouter @ '/users' endpoint after 1st using 'restricted' middleware

router.get('/hash', (req, res) => {
    //read the auth header
    const authentication = req.headers.authentication; //this reads the headers

    //hashes the value from the header
    const hash = bcrypt.hashSync(authentication, 16); //how to use bcryptjs to hash the authentication value

    res.json({ originalValue: authentication, hashedValue: hash})
});

router.get('/', (req, res) => {
    res.json({ api: "Its up and running!"})
});

module.exports = router;
