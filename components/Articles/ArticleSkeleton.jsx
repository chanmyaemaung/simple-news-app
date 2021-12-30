import { Grid, Skeleton, Box } from '@mui/material'

export default function ArticleSkeleton() {
	return (
		<Grid container spacing={1}>
			{[...new Array(12)].map((_, idx) => (
				<Grid key={idx} item xs={4}>
					<Box sx={{ my: 0.5, p: 0.5 }}>
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height={90}
						/>
						<Skeleton animation='wave' width='30%' height={20} />
						<Skeleton animation='wave' width='80%' height={20} />
					</Box>
				</Grid>
			))}
		</Grid>
	)
}
