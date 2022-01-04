import MainLayout from '@components/MainLayout'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

export default function Login() {
	const { replace } = useRouter()

	return (
		<MainLayout title='Login Page'>
			<Box sx={root}>
				<Button
					variant='outlined'
					color='error'
					onClick={() => replace('/api/auth/signin')}
				>
					Go to Login Page
				</Button>
			</Box>
		</MainLayout>
	)
}

const root = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh',
}
