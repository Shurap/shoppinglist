const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    nick: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lists: [{ type: mongoose.Types.ObjectId, ref: 'List' }]
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', schema)