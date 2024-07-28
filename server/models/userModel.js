import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

mongoose.set('strictQuery', false)
const { ObjectId } = mongoose.Schema
const userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		name: {
			firstName: {
				type: String,
				required: true
			},
			lastName: {
				type: String,
				required: true
			}
		},
		password: {
			type: String,
			required: true
		},
		birthday: {
			type: String,
			required: false,
			default: ''
		},
		location: {
			country: {
				type: String,
				required: false,
				default: ''
			},
			city: {
				type: String,
				required: false,
				default: ''
			}
		},
		images: {
			logo: {
				type: String,
				required: false,
				default: ''
			},
			gallery: [
				{
					type: ObjectId,
					required: false,
					default: []
				}
			]
		},
		status: {
			required: false,
			type: String,
			default: ''
		},
		profession: {
			required: false,
			type: String,
			default: ''
		},
		posts: [
			{
				type: {
					id: String,
					name: String,
					logo: String
				},
				required: false,
				ref: 'Posts',
				default: []
			}
		],
		channels: [
			{
				type: {
					id: String,
					name: String,
					logo: String
				},
				required: false,
				default: []
			}
		],
		subscribers: [
			{
				type: {
					id: String,
					name: String,
					logo: String
				},
				required: false,
				default: []
			}
		],
		favoritePosts: [
			{
				type: ObjectId,
				required: false,
				ref: 'Posts',
				default: []
			}
		],
		favoriteImages: [
			{
				type: ObjectId,
				required: false,
				ref: 'Images',
				default: []
			}
		]
	},
	{
		minimize: false
	}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
