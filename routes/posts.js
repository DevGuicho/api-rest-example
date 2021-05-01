const express = require('express')
const boom = require('@hapi/boom')
const PostsServices = require('../services/postsServices')

function apiPost(app) {
  const router = express.Router()
  const postsService = new PostsServices()
  app.use('/api/posts', router)

  router.get('/', async (req, res, next) => {
    try {
      const postList = await postsService.getPosts()
      res.json({
        message: 'Post list',
        data: postList
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      const post = await postsService.getPost({ id })

      res.json({
        message: 'Post retrieved',
        data: post
      })
    } catch (error) {
      next(boom.unauthorized(error.message))
    }
  })

  router.post('/', async (req, res, next) => {
    const post = req.body

    try {
      const postCreated = await postsService.createPost({ post })

      res.json({
        message: 'Post created',
        data: postCreated
      })
    } catch (error) {
      next(boom.unauthorized(error.message))
    }
  })

  router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const post = req.body
    try {
      const postUpdated = await postsService.updatePost({ id, post })

      res.json({
        message: 'post updated',
        data: postUpdated
      })
    } catch (error) {
      next(boom.unauthorized(error.message))
    }
  })

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params

    try {
      const postDeleted = await postsService.deletePost({ id })

      res.json({
        message: 'post deleted',
        data: postDeleted
      })
    } catch (error) {
      next(boom.unauthorized(error.message))
    }
  })
}

module.exports = apiPost
