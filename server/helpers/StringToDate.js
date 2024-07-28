export default (str) => {
	const pattern = /(\d{2})\.(\d{2})\.(\d{4})/
	return new Date(str.replace(pattern, '$3-$2-$1'))
}