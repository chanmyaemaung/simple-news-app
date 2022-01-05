import MainLayout from '@components/MainLayout'
import { Box, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { useGlobalContext } from 'context/authContext'

export default function Login() {
	const { signInWithGoogle } = useGlobalContext()

	return (
		<MainLayout title='Login Page'>
			<Box sx={root}>
				<Button
					onClick={signInWithGoogle}
					startIcon={<GoogleIcon />}
					variant='outlined'
					color='error'
				>
					Sign in with Google
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
