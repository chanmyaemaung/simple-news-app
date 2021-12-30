import EditPost from '@components/Dashboard/EditPost'
import axios from 'axios'

export default function EditPage({ posts }) {
	return <EditPost posts={posts} />
}

export const getServerSideProps = async ({ params }) => {
	const apiUrl = process.env.crudApi
	const { id } = params

	const { data } = await axios.get(apiUrl + '/posts/' + id)

	return {
		props: {
			posts: data,
		},
	}
}
