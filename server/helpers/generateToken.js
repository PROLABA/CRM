import tkn from 'jsonwebtoken'

export const GenToken = userId =>
	tkn.sign(
		{
			userId
		},
		process.env.ACCESS_TOKEN,
		{
			expiresIn: '10d'
		}
	)
