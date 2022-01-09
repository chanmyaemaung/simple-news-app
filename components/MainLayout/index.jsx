import Head from 'next/head'
import { Container } from '@mui/material'
import MyScrollToTop from '@components/ScrollToTop'

const MainLayout = ({ title, keywords, description, children }) => {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container maxWidth='xs'>
				{children}
				<MyScrollToTop />
			</Container>
		</>
	)
}

MainLayout.defaultProps = {
	title: 'Burma News',
	keywords: 'myanmar news',
	description:
		'This is an app built with Node JS and React Libraries. Made with love in Burma.',
}

export default MainLayout
