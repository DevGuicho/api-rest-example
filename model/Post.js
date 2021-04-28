const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  releaseDate: Date
})

const Post = model('Post', postSchema)

module.exports = Post
