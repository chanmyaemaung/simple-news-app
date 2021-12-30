import MainLayout from '@components/MainLayout'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import Articles from './articles'

// * Client Side Rendering
export default function Home() {
	// const router = useRouter()
	return (
		<MainLayout>
			<Articles />
			{/* <Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Button
					onClick={() => router.push('/articles')}
					variant='outlined'
					color='warning'
				>
					Go to articles
				</Button>
			</Box> */}
		</MainLayout>
	)
}
