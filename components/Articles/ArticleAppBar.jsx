import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@mui/material'
// Import search styles
import { Search, SearchIconWrapper, StyledInputBase } from './style'
import { useGlobalContext } from '@context/authContext'
import { useRouter } from 'next/router'
// All Icons
import SearchIcon from '@mui/icons-material/Search'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'

export default function ArticleAppBar({ handleSearch }) {
	// destructure router
	const { push } = useRouter()
	// Get auth data from the context api
	const { logOut, currentUser } = useGlobalContext()

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				{/* Appbar with Search Function */}
				<AppBar position='static' color='transparent'>
					<Toolbar variant='dense'>
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
			{currentUser && (
				<>
					<Button
						startIcon={<DashboardIcon />}
						onClick={() => push('/dashboard')}
						variant='contained'
						color='info'
						fullWidth
						sx={{ mt: 2 }}
					>
						Go to Dashboard
					</Button>
				</>
			)}
		</>
	)
}
