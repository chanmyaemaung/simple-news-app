import AdsBanner from '@components/AdsBanner'
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Paper,
} from '@mui/material'
import Link from 'next/link'

export default function ArticleLists({ data, length }) {
	const { _id, title, image_link, upload_img } = data

	return (
		<>
			<Grid item xs={4}>
				<Link href={`articles/${_id}`} passHref>
					<Paper elevation={4}>
						<Card id={_id} sx={{ height: '135px' }}>
							<CardActionArea>
								<CardMedia
									component='img'
									width='100%'
									height='75'
									image={!image_link ? upload_img : image_link}
									alt={title}
								/>
								<CardContent sx={{ p: 1 }}>
									<Typography
										sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}
										variant='caption'
										component='p'
										noWrap={true}
										gutterBottom
									>
										{title}
									</Typography>
									<Typography
										variant='body1'
										color='#6e6e6e'
										component='p'
										textAlign={'center'}
										sx={{ fontSize: '0.8rem' }}
									>
										နှိပ်ပါ 👆🏻
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Paper>
				</Link>
			</Grid>
			{/* Show ads banner */}
			{(length % 6) - 2 === 0 && <AdsBanner />}
		</>
	)
}
