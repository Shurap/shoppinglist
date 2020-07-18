const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    title: { type: String },
    list: [
      {
        note: { type: String },
        count: { type: String },
        completed: { type: Boolean }
      }
    ],
    users: [{ type: mongoose.Types.ObjectId, ref: 'User' }]
  },
  { versionKey: false }
)

module.exports = mongoose.model('List', schema)