const Post = require('../model/Post')

class PostsServices {
  async getPosts() {
    const posts = await Post.find({})
    return posts || []
  }

  async getPost({ id }) {
    const post = await Post.findById(id)
    return post || {}
  }

  async createPost({ post }) {
    const newPost = new Post({
      title: post.title,
      content: post.content,
      releaseDate: Date.now()
    })
    const postCreated = await newPost.save()
    return postCreated || {}
  }

  async updatePost({ id, post }) {
    const postUpdated = await Post.findByIdAndUpdate(id, post, { new: true })
    return postUpdated || {}
  }

  async deletePost({ id }) {
    const postDeleted = await Post.findByIdAndDelete(id)
    return postDeleted || {}
  }
}

module.exports = PostsServices
