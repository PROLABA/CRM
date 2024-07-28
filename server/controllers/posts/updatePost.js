// @route   POST /api/posts/:userID
// @access  Public

import asyncHandler from 'express-async-handler'
import Posts from '../../models/postsModel.js'

export const updatePost = asyncHandler(async (req, res) => {
	const { text, images } = req.body
	const postID = req.params.id
	const post = await Posts.findById(postID)
	post.content.text = text
	post.content.images = images
	await post.save()
	res.json(post)
})
