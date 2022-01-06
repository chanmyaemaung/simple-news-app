import { Box, Button, TextField, Container, Paper } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import DashboardAppBar from '../AppBar'
import { useRouter } from 'next/router'
import Loading from '@components/Loading'

/* initial state */
const initialState = {
	title: '',
	description: '',
	image_link: '',
	upload_img: '',
	author_name: 'PDF',
}

/* Client rendering */
export default function AddPost() {
	const [form, setForm] = useState(initialState)
	const [loading, setLoading] = useState(false)

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
			await axios.post(apiUrl + '/posts', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			setForm(initialState)
			setLoading(false)
			replace('/dashboard')
		} catch (error) {
			console.log(error.message)
		}
	}

	if (loading) return <Loading />

	return (
		<>
			<Head>
				<title>Create a post</title>
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
						{/* <TextField
							label='Image URL (Recommended)'
							placeholder='Paste your image URL'
							fullWidth
							variant='outlined'
							value={form.image_link}
							onChange={handleChange('image_link', form, setForm)}
						/> */}
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
							disabled
						/>
						<Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>
							Submit
						</Button>
					</Box>
				</Paper>
			</Container>
		</>
	)
}
