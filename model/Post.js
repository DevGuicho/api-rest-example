const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  releaseDate: Date
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Post = model('Post', postSchema)

module.exports = Post
