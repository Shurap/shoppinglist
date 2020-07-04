const { Router } = require('express')
const router = Router()
const middlewareAuth = require('../middleware/middlewareAuth')

router.get('/', middlewareAuth, async (req, res) => {
  try {
    res.json({ message: 'Тест прошел' })
  } catch {
    res.json({ message: 'Тест не прошел' })
  }
})

module.exports = router