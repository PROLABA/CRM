// @desc    Get user
// @route   GET /api/users/:id
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'

export const getUser = asyncHandler(async (req, res) => {
	const me = req.userID === req.params.id
	const user = await User.findById(req.params.id).lean()
	const users = await User.find({}).lean()
	user.subscribers = await user.subscribers.map(sub => {
		const u = users.find(us => String(us._id) === sub.id)
		return {
			...sub,
			logo: u.images.logo
		}
	})
	user.me = me
	res.json(user)
})
