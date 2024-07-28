import express from 'express'
import { getUser } from '../controllers/user/getUser.js'
import { registerUser, loginUser } from '../controllers/user/authUser.js'
import { getUsers } from '../controllers/user/getUsers.js'
import { protectAuth, validatorRegister } from '../middleware/authMiddleware.js'
import { errorHandler } from '../middleware/errorMiddleware.js'
import { updateData } from '../controllers/user/updateData.js'
import { AddFriend } from '../controllers/user/addFriend.js'
import updateLogo from '../controllers/user/updateLogo.js'

const router = express.Router()

router.route('/').get(getUsers)
router.route('/:id').get(protectAuth, getUser)
router.route('/update').put(protectAuth, updateData)
router
	.route('/updateLogo')
	.post(protectAuth, updateLogo)
router.route('/add-friend/:id').put(protectAuth, AddFriend)
router.route('/auth/login').post(loginUser)
router
	.route('/auth/register')
	.post(errorHandler, validatorRegister, registerUser)

export default router
