import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export const updateData = asyncHandler(async (req, res) => {
	const user = await User.findById(req.userID)
	user.status = req.body.status
	user.profession = req.body.profession
	user.location.country = req.body.location.country
	user.location.city = req.body.location.city
	await user.save()
	res.json(user)
})
