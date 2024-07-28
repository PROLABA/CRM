import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { ifElse } from '../../helpers/if-else.js'

export const AddFriend = asyncHandler(async req => {
	const senderID = String(req.userID)
	const userID = req.params.id
	const userChanel = await User.findById(userID)
	const userSender = await User.findById(senderID)
	userChanel.subscribers = ifElse(userChanel.subscribers, userSender)
	userSender.channels = ifElse(userSender.channels, userChanel)
	await userChanel.save()
	await userSender.save()
})
