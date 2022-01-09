import MainLayout from '@components/MainLayout'
import Articles from './articles'

// * Client Side Rendering
export default function Home() {
	return (
		<MainLayout>
			<Articles />
		</MainLayout>
	)
}
