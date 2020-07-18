const jwt = require('jsonwebtoken')

const middlewareAuth = (req, res, next) => {
  try {

// console.log(req.headers.authorization)

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.json({ message: 'No token provided' })
    }

    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = decoded

    next()

  } catch {
    res.json({ message: 'Failed to authenticate token' })
  }
}

module.exports = middlewareAuth