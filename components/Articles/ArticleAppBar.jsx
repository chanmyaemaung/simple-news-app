import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
// Import search styles
import { Search, SearchIconWrapper, StyledInputBase } from './style'
import { useGlobalContext } from '@context/authContext'
// All Icons
import SearchIcon from '@mui/icons-material/Search'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'
import MySpeedDial from '@components/SpeedDial'

export default function ArticleAppBar({ handleSearch }) {
	// Get auth data from the context api
	const { logOut, currentUser } = useGlobalContext()

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				{/* Appbar with Search Function */}
				<AppBar position='static' color='transparent'>
					<Toolbar id='back-to-top-anchor' variant='dense'>
						<Typography
							variant='h6'
							noWrap
							component='div'
							textAlign='justify'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							{currentUser ? '_👀_' : 'Burma News'}
						</Typography>
						{/* Search component */}
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder='Search Articles'
								inputProps={{ 'aria-label': 'search' }}
								onChange={handleSearch}
							/>
						</Search>
						{/* If user had authenticated then, will show log out button */}
						{currentUser && (
							<>
								<IconButton onClick={logOut}>
									<LogoutTwoToneIcon />
								</IconButton>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
			{/* If user had authenticated then, will show dashboard button */}
			{currentUser && <MySpeedDial />}
		</>
	)
}
