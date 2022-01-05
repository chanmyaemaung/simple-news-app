import DashBoardComponent from '@components/Dashboard'
import { useGlobalContext } from '@context/authContext'
import Head from 'next/head'
import Login from 'pages/login'

export default function DashBoard() {
	// from context api
	const { currentUser } = useGlobalContext()

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			{!currentUser ? <Login /> : <DashBoardComponent />}
		</>
	)
}
