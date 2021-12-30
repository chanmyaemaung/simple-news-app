import { Box } from '@mui/material'
import Image from 'next/image'

export default function AdsBanner() {
	return (
		<Box sx={{ width: '100%', cursor: 'pointer', p: 1, mr: -1.3 }}>
			<Image
				src='https://via.placeholder.com/720x90'
				alt='Ads banner'
				width={720}
				height={90}
				objectFit='cover'
				objectPosition='center'
				quality={100}
				layout='responsive'
				priority
			/>
		</Box>
	)
}
