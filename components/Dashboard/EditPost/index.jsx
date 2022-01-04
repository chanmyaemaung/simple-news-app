import { Box, Button, TextField, Container, Paper } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import DashboardAppBar from '../AppBar'
import Loading from '@components/Loading'

/* Client rendering */
export default function EditPost({ posts }) {
	const { title, description, image_link, author_name, _id } = posts
	const [loading, setLoading] = useState(false)

	const [form, setForm] = useState({
		title,
		description,
		image_link,
		author_name,
	})

	/* router */
	const { replace } = useRouter()

	/* ဓာတ်ပုံဖိုင် ရယူနိုင်ဖို့အတွက် */
	const handleFileValue = (key, form, setForm) => (e) => {
		setForm({
			...form,
			[key]: e.target.files[0],
		})
	}

	/* Form တန်ဖိုးရယူပြီး Update ပြန်လုပ်ခြင်း */
	const handleChange = (key, form, setForm) => (e) => {
		setForm({
			...form,
			[key]: e.currentTarget.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('title', form.title)
		formData.append('description', form.description)
		formData.append('image', form.image)
		formData.append('image_link', form.image_link)
		formData.append('author_name', form.author_name)

		try {
			setLoading(true)
			const apiUrl = process.env.crudApi
			await axios.put(apiUrl + '/posts/' + _id, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			setLoading(false)
			replace('/articles')
		} catch (error) {
			console.log(error.message)
		}
	}

	if (loading) return <Loading />

	return (
		<>
			<Head>
				<title>Edit post</title>
			</Head>
			<DashboardAppBar />
			<Container maxWidth='lg'>
				<Paper elevation={0} sx={{ p: 3 }}>
					<Box
						onSubmit={handleSubmit}
						component='form'
						noValidate
						autoComplete='off'
					>
						<TextField
							label='Title'
							placeholder='Write a title'
							variant='outlined'
							fullWidth
							required
							value={form.title}
							onChange={handleChange('title', form, setForm)}
						/>
						<Box sx={{ my: 2 }}></Box>
						<TextField
							label='Description'
							multiline
							rows={10}
							placeholder='Write down your description'
							fullWidth
							variant='outlined'
							required
							value={form.description}
							onChange={handleChange('description', form, setForm)}
						/>
						<Box sx={{ my: 2 }}></Box>
						<TextField
							label='Image URL (Recommended)'
							placeholder='Paste your image URL'
							fullWidth
							variant='outlined'
							value={form.image_link}
							onChange={handleChange('image_link', form, setForm)}
						/>
						<Box sx={{ my: 2 }}></Box>
						<TextField
							hidden
							fullWidth
							type='file'
							accept='image/*'
							onChange={handleFileValue('image', form, setForm)}
						/>
						<Box sx={{ my: 2 }}></Box>
						<TextField
							label='Author Name'
							placeholder='Post Owner Name'
							fullWidth
							variant='outlined'
							value={form.author_name}
							onChange={handleChange('author_name', form, setForm)}
						/>
						<Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>
							Submit
						</Button>
						<Button
							onClick={() => replace('/articles')}
							type='submit'
							variant='outlined'
							fullWidth
							sx={{ mt: 2 }}
						>
							Go Back
						</Button>
					</Box>
				</Paper>
			</Container>
		</>
	)
}
