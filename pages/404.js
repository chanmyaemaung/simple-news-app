import MainLayout from '@components/MainLayout'
import { Box } from '@mui/system'
import NoSsr from '@mui/material/NoSsr'
import { Button, Typography } from '@mui/material'
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone'
import { useRouter } from 'next/router'

export default function NotFoundPage() {
	const router = useRouter()

	return (
		<MainLayout title='Not Found!'>
			<NoSsr>
				<Box sx={root}>
					<Typography component='p' variant='h5' textAlign='center'>
						There is nothing here!
					</Typography>
					<Button
						onClick={() => router.push('/articles')}
						size='small'
						variant='text'
						sx={{ width: '60%' }}
						startIcon={<CottageTwoToneIcon />}
					>
						Go Home
					</Button>
				</Box>
			</NoSsr>
		</MainLayout>
	)
}

const root = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: '100vh',
}
