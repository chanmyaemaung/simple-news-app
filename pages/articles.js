import MainLayout from '@components/MainLayout'
import axios from 'axios'
import ArticlesLists from '@components/Articles/ArticlesLists'
import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ArticleSkeleton from '@components/Articles/ArticleSkeleton'
import ArticleAppBar from '@components/Articles/ArticleAppBar'
import MyFooter from '@components/Footer'
import { useRouter } from 'next/router'
import BallotIcon from '@mui/icons-material/Ballot'

// * Client Side Rendering
export default function Articles() {
	const [articles, setArticles] = useState([])
	const [search, setSearch] = useState('')

	// useRouter
	const { push } = useRouter()

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
			<ArticleAppBar handleSearch={handleSearch} />
			{/* Warpping Grid Container */}
			<Grid container spacing={1} my={0.5}>
				{getFilteredArticles(articles)
					.slice(0, 12)
					.map((item, idx) => (
						/* Send the data as props */
						<ArticlesLists key={idx} data={item} length={idx} />
					))}
				{/* If there is no article yet then show Skeleton Loading */}
				{!articles.length && <ArticleSkeleton />}
			</Grid>
			{/* Goto all articles pages */}
			<Button
				onClick={() => push('/all')}
				size='small'
				fullWidth
				variant='outlined'
				startIcon={<BallotIcon />}
			>
				See all articles
			</Button>
			{/* Footer */}
			<MyFooter />
		</MainLayout>
	)
}
