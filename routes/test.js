const { Router } = require('express')
const router = Router()
const middlewareAuth = require('../middleware/middlewareAuth')

router.get('/', middlewareAuth, async (req, res) => {
  try {
    res.json({ message: 'Test passed' })
  } catch {
    res.json({ message: 'Test did not pass' })
  }
})

module.exports = router