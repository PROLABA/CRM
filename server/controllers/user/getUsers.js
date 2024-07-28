// @desc    Get user
// @route   GET /api/users
// @access  Public

import asyncHandler from 'express-async-handler'

export const getUsers = asyncHandler(async (req, res) => {
	const users = []
	const result = []
	users.map(u =>
		result.push({
			id: u._id,
			name: u.name.firstName + ' ' + u.name.lastName,
			logo: u.images.logo
		})
	)

	res.json(result)
})
