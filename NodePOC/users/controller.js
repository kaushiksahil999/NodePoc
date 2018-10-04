const express = require('express');
const router = express.Router();
const userService = require('./service');

router.post('/register', register);
router.post('/login',login);


module.exports = router;

function register(req, res, next){
  userService.create(req.body)
  .then(() => res.json({}))
  .catch(err => next(err));
}

function login(req, res, next){
  userService.login(req.body)
  .then(user => user ? res.json(user) : res.status(400).json({
    message : 'Username of password invalid'
  }))
  .catch(err => next(err));
}
