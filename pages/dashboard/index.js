import DashBoardComponent from '@components/Dashboard'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Login from 'pages/login'

export default function DashBoard() {
	const { data: session } = useSession()

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			{!session ? <Login /> : <DashBoardComponent />}
		</>
	)
}
