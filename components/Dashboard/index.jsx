import MyFooter from '@components/Footer'
import MySpeedDial from '@components/SpeedDial'
import { useGlobalContext } from '@context/authContext'
import { Container } from '@mui/material'
import DashboardAppBar from './AppBar'
import ShowAllPosts from './ShowAllPosts'

export default function DashBoardComponent() {
	// Get auth data from the context api
	const { currentUser } = useGlobalContext()

	return (
		<>
			{/* App Bar */}
			<DashboardAppBar />
			<Container maxWidth={'md'}>
				{/* Show all articles */}
				<ShowAllPosts />
				{currentUser && <MySpeedDial />}
				<MyFooter />
			</Container>
		</>
	)
}
