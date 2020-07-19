const List = require('../models/list')
const User = require('../models/user')
const { addNewListToUser } = require('./controlsUser')

exports.createNewList = async (listName, userId) => {
  const list = new List({ title: listName })
  list.users.push(userId)
  await list.save()
  await addNewListToUser(userId, list._id)
}

exports.getAllListsFromUser = async (userId) => {
  const lists = await User.findById(userId).populate('lists')
  const array = lists.lists.map(element => {
    return { title: element.title, list: element.list, id: element._id }
  })
  return array
}

exports.createNewItem = async (note, count, id) => {
  const list = await List.findById(id)
  list.list.push({ note, count, completed: false })
  await list.save()
}

exports.findListInUser = async (listName, userId) => {
  const lists = await this.getAllListsFromUser(userId)
  const data = lists.find((element) => {
    return (element.title === listName)
  })
  return data
}

exports.findItemInList = async (itemName, listId) => {
  const list = await List.findById(listId)
  const data = list.list.find((element) => {
    return (element.note === itemName)
  })
  return data
} 

exports.findItemInListAndReplace = async (listId, id, note, count, completed) => {
  const list = await List.findById(listId)
  list.list.forEach((element) => {
    if (element._id.toString() === id) {
      element.note = note
      element.count = count
      element.completed = completed
    }
  })
  await list.save()
} 

exports.deleteItemFromList = async (id, listId) => {
  const list = await List.findById(listId)
  console.log(list.list)
  list.list.id(id).remove()
  await list.save()
}

exports.deleteListFromUser = async (listId) => {
  const list = await List.findById(listId)
  list.remove()
}