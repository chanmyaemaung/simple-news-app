import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { AppProvider } from 'context/authContext'
import GlobalStyle from 'styles/globalStyles'

function MyApp({ Component, pageProps }) {
	return (
		/* Wrap with Global Context Auth */
		<AppProvider>
			{/*  My Global Styles */}
			<GlobalStyle />
			<Component {...pageProps} />
		</AppProvider>
	)
}

export default MyApp
