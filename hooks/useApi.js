import axios from 'axios'

export const UseApi = async () => {
	try {
		const apiUrl = process.env.crudApi
		const { data } = await axios.get(apiUrl + '/posts')

		return data
	} catch (error) {
		console.log(error.message)
	}
}
