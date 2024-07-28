import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import Posts from '../../models/postsModel.js'
import StringToDate from '../../helpers/StringToDate.js'

export const getUserNews = asyncHandler(async (req, res) => {
	const user = await User.findById(String(req.userID)).lean()
	const initPosts = await Posts.find({}).lean()
	const initUsers = await User.find({}).lean()
	let postsID = []
	user.channels.map(channel => {
		const user = initUsers.find(u => String(u._id) === String(channel.id))
		user.posts.map(p => {
			postsID.push({
				id: String(p.id),
				userLogo: user.images.logo,
				userName: `${user.name.firstName} ${user.name.lastName}`
			})
		})
	})
	const posts = postsID.map(item => {
		const post = initPosts.find(p => String(p._id) === String(item.id))
		return {
			...post,
			userLogo: item.userLogo,
			userName: item.userName
		}
	})
	const result = []
	posts.map(p => {
		result.push({
			...p,
			userLogo: p.userLogo,
			userName: p.userName
		})
	})
	result.sort((p1, p2) => StringToDate(`${p2.date.day}.${p2.date.time}`) - StringToDate(`${p1.date.day}.${p1.date.time}`))
	res.json({ posts: result })
})
