const User = require('../models/user')

exports.addNewListToUser = async (userId, listId) => {
  const user = await User.findById(userId)
  user.lists.push(listId)
  await user.save()
}

exports.createNewUser = async (nick, email, password) => {
  const user = new User({ nick, email, password })
  await user.save()
}

exports.findUser = async (field) => {
  const user = await User.findOne(field)
  return user
}