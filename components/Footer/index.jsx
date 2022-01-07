import { Box, Tooltip, Typography } from '@mui/material'
import styled from 'styled-components'

const myEmail = 'yangondev@gmail.com'
const emailLink = () => (window.location.href = `mailto:${myEmail}`)

export default function MyFooter() {
	return (
		<>
			<Box>
				<Tooltip title='Email me' arrow>
					<MyLink onClick={emailLink}>
						<Typography
							component='p'
							variant='caption'
							textAlign='center'
							sx={{ my: 1 }}
						>
							👉🏻Hire me for your work!👈🏻
						</Typography>
					</MyLink>
				</Tooltip>
			</Box>
		</>
	)
}

// Styled for anchor tag
const MyLink = styled.a`
	text-decoration: none;
	color: #000;
	cursor: pointer;
`
