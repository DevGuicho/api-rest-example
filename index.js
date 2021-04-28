require('./lib/db')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const Post = require('./model/Post')

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/post', async (req, res) => {
  try {
    const postList = await Post.find({})
    res.json({
      message: 'Post list',
      data: postList
    })
  } catch (error) {
    res.status(500).json({
      message: 'There was an error'
    })
  }
})

app.get('/api/post/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById(id)

    res.json({
      message: 'Post retrieved',
      data: post
    })
  } catch (error) {
    res.status(500).json({
      message: 'there was en error'
    })
  }
})

app.post('/api/post', async (req, res) => {
  const post = req.body
  const newPost = new Post({
    title: post.title,
    content: post.content,
    releaseDate: Date.now()
  })
  try {
    const postCreated = await newPost.save()

    res.json({
      message: 'Post created',
      data: postCreated
    })
  } catch (error) {
    res.status(500).json({
      message: 'There was an error :('
    })
    console.log(error)
  }
})

app.put('/api/post/:id', async (req, res) => {
  const { id } = req.params
  const post = req.body
  try {
    const postUpdated = await Post.findByIdAndUpdate(id, post, { new: true })

    res.json({
      message: 'post updated',
      data: postUpdated
    })
  } catch (error) {
    res.status(500).json({
      message: 'there was an error'
    })
  }
})

app.delete('/api/post/:id', async (req, res) => {
  const { id } = req.params

  try {
    const postDeleted = await Post.findByIdAndDelete(id)

    res.json({
      message: 'post deleted',
      data: postDeleted
    })
  } catch (error) {
    res.status(500).json({
      message: 'there was an error'
    })
  }
})
app.listen(3000, () => console.log('Server on port 3000'))
