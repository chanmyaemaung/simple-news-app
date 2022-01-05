import { Box } from '@mui/material'
import Image from 'next/image'

export default function AdsBanner() {
	const appLink =
		'https://play.google.com/store/apps/details?id=com.pdfsupporter'

	const sponsorImage = 'https://i.imgur.com/yWkVc8X.gif'

	return (
		<Box sx={{ width: '100%', cursor: 'pointer', p: 1, mr: -1.3 }}>
			<a href={appLink} target='_blank'>
				<Image
					src={sponsorImage}
					alt='Ads banner'
					width={720}
					height={90}
					objectFit='cover'
					objectPosition='center'
					quality={100}
					layout='responsive'
					priority
				/>
			</a>
		</Box>
	)
}
