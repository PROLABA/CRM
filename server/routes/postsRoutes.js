import express from 'express'
import { createPost } from '../controllers/posts/createPost.js'
import { getUserPosts } from '../controllers/posts/getUserPosts.js'
import { delPost } from '../controllers/posts/delPost.js'
import { likePost } from '../controllers/posts/likePost.js'
import { protectAuth } from '../middleware/authMiddleware.js'
import { updatePost } from '../controllers/posts/updatePost.js'
import { getUserNews } from '../controllers/posts/getUserNews.js'
import { GetChannels } from '../controllers/posts/getChannels.js'

const router = express.Router()

router.route('/').post(protectAuth, createPost)
router.route('/news').get(protectAuth, getUserNews)
router.route('/channels').get(protectAuth, GetChannels)
router.route('/:userID').get(protectAuth, getUserPosts)
router.route('/:id').delete(protectAuth, delPost)
router.route('/:id').put(protectAuth, updatePost)
router.route('/like/:id').put(protectAuth, likePost)

export default router
