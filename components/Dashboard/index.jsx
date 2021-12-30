import { Container } from '@mui/material'
import DashboardAppBar from './AppBar'
import ShowAllPosts from './ShowAllPosts'

export default function DashBoardComponent() {
	return (
		<>
			{/* App Bar */}
			<DashboardAppBar />
			<Container maxWidth={'md'}>
				{/* Show all articles */}
				<ShowAllPosts />
			</Container>
		</>
	)
}
