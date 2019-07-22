const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token
  if(!token){
    res.status(403).json({
      success: false,
      message: 'not logged in'
    })
  }

  const p = new Promise(
    (res, rej) => {
      jwt.verify(token, req.app.get('jwt-token'), (err, decoded) => {
        if(err) rej(err)
        res(decoded)
      })
    }
  )

  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message
    })
  }

  p.then((decoded) => {
    req.decoded = decoded
    next()
  }).catch(onError)
}

module.exports = authMiddleware;