import User from '../../models/userModel.js'
import { GenToken } from '../../helpers/generateToken.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'

export const registerUser = asyncHandler(async (req, res) => {
	try {
		const userBody = req.body
		const { email } = userBody
		const isHaveUser = await User.findOne({ email })
		if (isHaveUser) {
			res.status(400)
			throw new Error('Oh, that email\'s taken!')
		}
		const user = await User.create(userBody)
		const token = GenToken(user._id)
		res.json({
			user,
			token
		})
	} catch (err) {
		res.status(500).json(err.message)
	}
})

export const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email })
		if (user) {
			const checkPassword = await bcrypt.compare(password, user.password)
			if (checkPassword) {
				const id = user._id
				const token = GenToken(user._id)
				res.json({
					id,
					token
				})
			} else {
				res.status(400)
				throw new Error('Email or password is invalid')
			}
		} else {
			res.status(400)
			throw new Error('Email or password is invalid')
		}
	} catch (err) {
		res.status(400).json(err.message)
	}
})
