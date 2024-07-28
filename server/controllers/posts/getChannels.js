import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'

export const GetChannels = asyncHandler(async (req, res) => {
	const user = await User.findById(String(req.userID)).lean()
	const users =await User.find({}).lean()
	let channels = await user.channels.map(c=>{
			const u = users.find(us=> String(us._id) === c.id)
			return {
				...c,
				logo: u.images.logo
			}
	})
	res.json(channels)
})
