import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Container,
	Typography,
} from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone'
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone'
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone'
import moment from 'moment'
import { reloadPage } from '@helper/index'
import { useGlobalContext } from '@context/authContext'

export default function Articles({ result }) {
	const { replace } = useRouter()

	// retrieve data from context
	const { currentUser } = useGlobalContext()

	const {
		_id,
		title,
		description,
		image_link,
		upload_img,
		author_name,
		createdAt,
	} = result

	// click to delete post
	async function deletePost() {
		const apiUrl = process.env.crudApi

		await axios.delete(`${apiUrl}/posts/${_id}`)
		console.log('Deleted', _id)
		alert(`Successfully deleted for this id: ${_id}`)
		reloadPage()
	}

	// render html output
	function markup() {
		return {
			__html: description,
		}
	}

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Container maxWidth={'md'}>
				<Card sx={{ p: 1 }}>
					<Typography
						textAlign={'center'}
						gutterBottom
						variant='h6'
						component='div'
						fontWeight={'bold'}
					>
						{title}
					</Typography>
					<CardActionArea>
						<CardMedia
							component='img'
							image={!image_link ? upload_img : image_link}
							width={'100%'}
							height={350}
						/>
					</CardActionArea>
					<CardContent>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								my: 1,
							}}
						>
							<Chip label={author_name} icon={<HistoryEduTwoToneIcon />} />
							<Chip
								label={moment(new Date(createdAt)).fromNow()}
								icon={<AccessTimeFilledTwoToneIcon />}
							/>
						</Box>
						<Box dangerouslySetInnerHTML={markup()} component='div' />
					</CardContent>
					<CardActions>
						<Button
							onClick={() => replace('/articles')}
							size='small'
							color='primary'
							startIcon={<ArrowBackTwoToneIcon />}
						>
							Go back
						</Button>
						{currentUser && (
							<>
								<Button
									size='small'
									color='warning'
									startIcon={<EditTwoToneIcon />}
									onClick={() => replace(`/articles/${_id}/edit`)}
								>
									Edit
								</Button>
								<Button
									size='small'
									color='error'
									startIcon={<DeleteOutlineTwoToneIcon />}
									onClick={deletePost}
								>
									Delete
								</Button>
							</>
						)}
					</CardActions>
				</Card>
			</Container>
		</>
	)
}

// * get data from server
export const getServerSideProps = async ({ params }) => {
	const { id } = params
	// const url = process.env.apiUrl
	const apiUrl = 'https://crud-cloudinary.herokuapp.com/api/v1/posts'
	const { data } = await axios.get(`${apiUrl}/${id}`)
	return {
		props: {
			result: data,
		},
	}
}

// * genereate path
/* export const getStaticPaths = async () => {
	const url = process.env.apiUrl
	const { data } = await axios.get(`${url}/articles`)

	const _ids = data?.articles.map((article) => article._id)
	const paths = _ids.map((id) => ({ params: { id: id.toString() } }))

	return {
		paths,
		fallback: false,
	}
}
 */
