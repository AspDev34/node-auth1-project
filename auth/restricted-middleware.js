//if there is a session and the user is logged in, call next and move on in the function. Else send an error message.
module.exports = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    }
    else {
        res.status(401).json({ message: 'You shall not pass!'})
    }
}