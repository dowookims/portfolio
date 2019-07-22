const User = require("../../../model/user")
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { username, email, password } = req.body;
  let newUser = null;

  const create = (user) => {
    if (user){
      throw new Error('username is exists');
    } else {
      return User.create(username , email, password)
    }
  }

  const count = (user) => {
    newUser = user
    return User.count({}).exec();
  }

  const assign = (count) => {
    if (count === 1){
      return newUser.assignAdmin()
    } else {
      return Promise.resolve(false);
    }
  }

  const respond = (isAdmin) => {
    res.json({
      message: 'register successfully',
      admin: isAdmin ? true : false
    })
  }

  const onError = (error) => {
    res.status(409).json({
      message: error.message
    })
  }

  User.findOneByUsername(username)
  .then(create)
  .then(count)
  .then(assign)
  .then(respond)
  .catch(onError)
}

exports.login = (req, res) => {
  const { username, email, password } = req.body;
  const secret = req.app.get('jwt-secret');
  const check = (user) => {
    if(!user){
      throw new Error('Login Failed')
    } else {
      if (user.verify(password)){
        const p = new Promise((res, rej) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
              email: user.email,
              admin: user.admin
            },
            secret,
            {
              expiresIn: '7d',
              issuer: 'dowookim.kim',
              subject: 'userInfo'
            }, (err, token) => {
              if (err) rej(err)
              res(token)
            })
        })
        return p
      } else {
        throw new Error('login Failed')
      }
    }
  }

  const respond = (token) => {
    res.json({
      message: 'logged in successfully',
      token
    })
  }

  const onError = (error) => {
    res.status(403).json({
      message: error.message
    })
  }

  User.findOneByUsername(username)
  .then(check)
  .then(respond)
  .catch(onError)
}

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded
  })
}