const jwt = require('jsonwebtoken')

const middlewareAuth = (req, res, next) => {
  try {

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.json({ message: 'Нет авторизации' })
    }

    const decoded = jwt.verify(token, process.env.SECRET)
    console.log('decoded: ', decoded)
    req.user = decoded

    next()

  } catch {
    res.json({ message: 'нет авторизации' })
  }
}

module.exports = middlewareAuth