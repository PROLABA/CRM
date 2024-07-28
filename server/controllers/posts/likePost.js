// @route   POST /api/posts/:userID
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import Posts from '../../models/postsModel.js'

export const likePost = asyncHandler(async (req, res) => {
	const likeSender = req.userID
	const postID = req.params.id
	const user = await User.findById(likeSender)
	const checkLike = !!user.favoritePosts.find(i => String(i) === String(postID))
	const post = await Posts.findById(postID)
	if (checkLike) {
		post.likedUsers = post.likedUsers.filter(
			i => String(i) !== String(likeSender)
		)
		user.favoritePosts = user.favoritePosts.filter(
			i => String(i) !== String(postID)
		)
	} else {
		user.favoritePosts.push(postID)
		post.likedUsers.push(likeSender)
	}
	post.likes = post.likedUsers.length
	await user.save()
	await post.save()
	res.json(post)
})
