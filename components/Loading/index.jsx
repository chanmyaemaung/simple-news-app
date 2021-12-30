import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
	return (
		<Box sx={styles.root}>
			<Typography component='h5' variant='h5' textAlign={'center'} gutterBottom>
				Wait for a while...
			</Typography>
			<CircularProgress size={30} color='info' />
		</Box>
	)
}

const styles = {
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		backgroundColor: '#fafafa',
	},
}
