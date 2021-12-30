import MainLayout from '@components/MainLayout'
import axios from 'axios'
import ArticlesLists from '@components/Articles/ArticlesLists'
import { Box, Button, Grid, AppBar, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '@hooks/withSearch'
import ArticleSkeleton from '@components/Articles/ArticleSkeleton'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { server } from '@config/index'

// * Client Side Rendering
export default function Articles() {
	const [articles, setArticles] = useState([])
	const [search, setSearch] = useState('')

	// * Fetching and Component Did Mount
	useEffect(() => {
		const fetchArticles = async () => {
			const apiUrl = process.env.crudApi
			const { data } = await axios.get(apiUrl + '/posts')

			setArticles(data)
		}

		fetchArticles()
	}, [])

	// * Filtered Articles
	const getFilteredArticles = (articles) => {
		return articles.filter((article) => {
			return article.title.toLowerCase().includes(search.toLowerCase())
		})
	}

	// * Handle Search
	const handleSearch = (e) => {
		setSearch(e.currentTarget.value)
	}

	return (
		<MainLayout>
			<Box sx={{ flexGrow: 1 }}>
				{/* Appbar with Search Function */}
				<AppBar position='static' color='transparent'>
					<Toolbar variant='dense'>
						<Typography
							variant='h6'
							noWrap
							component='div'
							textAlign='justify'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							MM NEWS
						</Typography>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder='Search Articles'
								inputProps={{ 'aria-label': 'search' }}
								onChange={handleSearch}
							/>
						</Search>
					</Toolbar>
				</AppBar>
			</Box>
			<Box>
				{/* Warpping Grid Container */}
				<Grid container spacing={1} my={0.5}>
					{getFilteredArticles(articles).map((item, idx) => (
						/* Send the data as props */
						<ArticlesLists key={idx} data={item} length={idx} />
					))}
					{/* If there is no article yet then show Skeleton Loading */}
					{!articles.length && <ArticleSkeleton />}
				</Grid>
				{/* <Button
					startIcon={<DashboardIcon />}
					onClick={() => router.push('/dashboard')}
					variant='contained'
					color='warning'
					fullWidth
					sx={{ mt: 2 }}
				>
					Go to Dashboard
				</Button> */}
			</Box>
		</MainLayout>
	)
}
