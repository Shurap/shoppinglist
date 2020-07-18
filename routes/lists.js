const { Router } = require('express')
const router = Router()
const middlewareAuth = require('../middleware/middlewareAuth')
const List = require('../models/list')
const User = require('../models/user')
const { check, validationResult } = require('express-validator')
const { createNewList, createNewItem } = require('../controls/controlsList')
const { getAllListsFromUser } = require('../controls/controlsList')

router.post(
  '/new',
  [
    middlewareAuth,
  ]
  async (req, res) => {
    try {
      const { listName, userId } = req.body

      await createNewList(listName, userId)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'List created', lists: lists })

    } catch {
      res.json({ message: 'Error of save new list' })
    }
  }
)

router.post(
  '/item',
  middlewareAuth,
  async (req, res) => {
    try {
      const { note, count, id } = req.body
      await createNewItem(note, count, id)
      res.json({ message: 'Item created' })

    } catch {
      res.json({ message: 'Error of save new item' })
    }
  }
)

module.exports = router