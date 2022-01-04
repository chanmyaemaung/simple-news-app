import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Avatar, IconButton, Typography, Box } from '@mui/material'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import { useEffect, useState } from 'react'
import { UseApi } from '@hooks/useApi'
import axios from 'axios'
import { reloadPage } from '@helper/index'
import { useSession, signOut } from 'next-auth/react'

export default function ShowAllPosts() {
	const [articles, setArticles] = useState([])

	// fetch api on component did mount
	useEffect(() => {
		const fetchArticles = async () => {
			const data = await UseApi()
			setArticles(data)
		}

		return fetchArticles()
	}, [])

	// Get Api Data and Fill into Row
	const rowData = articles?.map(({ _id, title, image_link, upload_img }) => {
		return {
			id: _id,
			picture: !upload_img ? image_link : upload_img,
			title: title,
		}
	})

	const { data: session } = useSession()

	const image = session?.user?.image
	const username = session?.user?.name

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					px: 1,
					mb: 1,
				}}
			>
				<IconButton title="Click to Log Out" onClick={() => signOut()}>
					<Avatar src={image} />
				</IconButton>
				<Typography component='h3' variant='h5' color="#ff0000">{username}</Typography>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='caption table'>
					<caption>
						Show all the articles and manage it as you like to do.
					</caption>
					<TableHead>
						<TableRow>
							<TableCell>Avatar</TableCell>
							<TableCell align='center'>Title</TableCell>
							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rowData.map(({ id, picture, title }) => {
							// click to view post
							function viewPost() {
								window.location.href = `/articles/${id}`
								console.log('You clicked to view post: ', id)
							}
							// click to edit post
							function editPost() {
								console.log('Edited', id)
								window.location.href = `/articles/${id}/edit`
							}

							// click to delete post
							async function deletePost() {
								const apiUrl = process.env.crudApi

								await axios.delete(`${apiUrl}/posts/${id}`)
								console.log('Deleted', id)
								alert(`Successfully deleted for this id: ${id}`)
								reloadPage()
							}

							return (
								<TableRow key={id}>
									<TableCell component='th' scope='row'>
										<IconButton>
											<Avatar src={picture} />
										</IconButton>
									</TableCell>
									<TableCell align='center'>
										<Typography fontSize={'0.8rem'} noWrap={true}>
											{title.slice(0, 30)}
										</Typography>
									</TableCell>
									<TableCell align='center'>
										<Box sx={{ actionsBtn }}>
											<IconButton onClick={() => editPost()} color='warning'>
												<EditTwoToneIcon />
											</IconButton>
											<IconButton onClick={() => deletePost()} color='error'>
												<DeleteOutlineTwoToneIcon />
											</IconButton>
											<IconButton onClick={() => viewPost()} color='info'>
												<VisibilityTwoToneIcon />
											</IconButton>
										</Box>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

// style
const actionsBtn = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	padding: '0px',
}
