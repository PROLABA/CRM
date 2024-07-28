export const ifElse = (array, user) => {
	const data = {
		id: String(user._id),
		name: user.name.firstName + ' ' + user.name.lastName,
		logo: user.images.logo
	}
	const isValue = array.find(u => String(u.id) === String(user.id))
	if (!isValue) array.push(data)
	else array = array.filter(v => String(v.id) !== data.id)
	return array
}
