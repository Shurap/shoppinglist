const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// /auth/register
router.post(
  '/register',
  [
    check('email', 'Wrong email').isEmail(),
    check('password', 'Minimal lenght of password is 6 letters').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.json({
          errors: errors.array(),
          message: 'Incorrect registration data'
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.json({ message: 'This user already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.json({ message: 'User created' })

    } catch (err) {
      res.json({ message: 'Something went wrong, try again' })
    }
  }
)

// /auth/login
router.post(
  '/login',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
    try {

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.json({ message: 'User not found' })
      }

      // const isMatch = await bcrypt.compare(password, user.password)

      // if (!isMatch) {
      //   return res.json({ message: 'Wrong password' })
      // }

      const token = jwt.sign(
        { userId: user.id },
        process.env.SECRET,
        { expiresIn: '1h' }
      )

      res.json({
        token,
        userId: user.id,
        email: user.email, message: 'You logged'
      })

    } catch (err) {
      res.json({ message: 'Something went wrong, try again' })
    }
  }
)

module.exports = router