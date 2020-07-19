const { Router } = require('express')
const router = Router()
const middlewareAuth = require('../middleware/middlewareAuth')
const { check, validationResult } = require('express-validator')
const { createNewList, createNewItem } = require('../controls/controlsList')
const {
  getAllListsFromUser,
  findListInUser,
  findItemInList,
  findItemInListAndReplace,
  deleteItemFromList,
  deleteListFromUser
} = require('../controls/controlsList')

router.post(
  '/new',
  [
    check('listName', 'Enter name of list').notEmpty()
  ],
  middlewareAuth,
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { listName, userId } = req.body

      const list = await findListInUser(listName, userId)
      if (list) {
        return res.json({ message: 'This list already existed' })
      }

      await createNewList(listName, userId)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'List created', lists: lists })

    } catch {
      res.json({ message: 'Error of save new list' })
    }
  }
)

router.post(
  '/delete',
  middlewareAuth,
  async (req, res) => {
    try {

      const { listId, userId } = req.body

      await deleteListFromUser(listId)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'List deleted', lists: lists })

    } catch {
      res.json({ message: 'Error of delete list' })
    }
  }
)

router.post(
  '/item/new',
  [
    check('note', 'Enter name of good').notEmpty()
  ],
  middlewareAuth,
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { note, count, id, listId, userId } = req.body

      const item = await findItemInList(note, listId)
      if (item) {
        return res.json({ message: 'This good already existed' })
      }

      await createNewItem(note, count, id)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'Item created', lists: lists })

    } catch {
      res.json({ message: 'Error of save new item' })
    }
  }
)

router.post(
  '/item/change',
  middlewareAuth,
  async (req, res) => {
    try {

      const { note, count, completed, id, listId, userId } = req.body

      await findItemInListAndReplace(listId, id, note, count, completed)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'Item changed', lists: lists })

    } catch {
      res.json({ message: 'Error of changing new item' })
    }
  }
)

router.post(
  '/item/delete',
  middlewareAuth,
  async (req, res) => {
    try {

      const { id, listId, userId } = req.body

      await deleteItemFromList(id, listId)

      const lists = await getAllListsFromUser(userId);
      res.json({ message: 'Item deleted', lists: lists })

    } catch {
      res.json({ message: 'Error of delete item' })
    }
  }
)

module.exports = router