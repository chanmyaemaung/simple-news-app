import MainLayout from '@components/MainLayout'
import axios from 'axios'
import ArticlesLists from '@components/Articles/ArticlesLists'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ArticleSkeleton from '@components/Articles/ArticleSkeleton'
import ArticleAppBar from '@components/Articles/ArticleAppBar'
import MyFooter from '@components/Footer'

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
			<ArticleAppBar handleSearch={handleSearch} />
			{/* Warpping Grid Container */}
			<Grid container spacing={1} my={0.5}>
				{getFilteredArticles(articles)
					.slice(0, 21)
					.map((item, idx) => (
						/* Send the data as props */
						<ArticlesLists key={idx} data={item} length={idx} />
					))}
				{/* If there is no article yet then show Skeleton Loading */}
				{!articles.length && <ArticleSkeleton />}
			</Grid>
			<MyFooter />
		</MainLayout>
	)
}
