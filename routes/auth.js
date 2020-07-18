const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { createNewUser, findUser } = require('../controls/controlsUser')
const { getAllListsFromUser } = require('../controls/controlsList')

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

      const { nick, email, password } = req.body

      const candidate = await findUser({ email })
      if (candidate) {
        return res.json({ message: 'This user already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      await createNewUser(nick, email, hashedPassword)

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

      const user = await findUser({ email })
      if (!user) {
        return res.json({ message: 'User not found' })
      }

      //TODO: before production will delete message about password 

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.json({ message: 'Wrong password' })
      }

      const lists = await getAllListsFromUser(user.id);

      const token = jwt.sign(
        { userId: user.id },
        process.env.SECRET,
        { expiresIn: '1h' }
      )

      res.json({
        token,
        userId: user.id,
        nick: user.nick,
        message: 'You logged',
        lists: lists
      })

    } catch (err) {
      res.json({ message: 'Something went wrong, try again' })
    }
  }
)

module.exports = router