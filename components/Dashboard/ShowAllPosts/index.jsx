import * as React from 'react'
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TablePagination,
	TableRow,
	Paper,
	IconButton,
	Avatar,
	Typography,
} from '@mui/material'

/* Custom hooks */
import { useGlobalContext } from '@context/authContext'
import { UseApi } from '@hooks/useApi'
import TableLists from './TableLists'
import axios from 'axios'
import TablePaginationActions from './TablePaginationActions'
import { reloadPage } from '@helper/index'

export default function ShowAllPosts() {
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)
	const [articles, setArticles] = React.useState([])

	// from context api
	const { currentUser, logOut } = useGlobalContext()

	const displayName = currentUser?.providerData[0]?.displayName
	const photoURL = currentUser?.providerData[0]?.photoURL
	const defaultImg = 'https://cdn-icons-png.flaticon.com/512/1074/1074766.png'

	// fetch api on component did mount
	React.useEffect(() => {
		const fetchArticles = async () => {
			const data = await UseApi()
			setArticles(data)
		}

		return fetchArticles()
	}, [])

	// Populate data in table rows
	const rows = articles?.map(({ _id, title, image_link, upload_img }) => {
		return {
			id: _id,
			picture: !upload_img ? image_link : upload_img,
			title: title,
		}
	})

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	return (
		<>
			{/* Show avatar and authenticated username */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					px: 1,
					mb: 1,
				}}
			>
				<IconButton onClick={logOut} title='Click to Log Out'>
					<Avatar alt='User Image' src={!photoURL ? defaultImg : photoURL} />
				</IconButton>
				<Typography component='h3' variant='h5' color='#EE7512'>
					{!displayName ? 'Unknown' : displayName}
				</Typography>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
					<TableBody>
						{(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map(({ id, picture, title }) => {
							/// CRUD Logics will goes here
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
								<TableLists
									key={id}
									title={title}
									picture={picture}
									editPost={editPost}
									deletePost={deletePost}
									viewPost={viewPost}
								/>
							)
						})}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
								colSpan={3}
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: {
										'aria-label': 'rows per page',
									},
									native: true,
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	)
}
