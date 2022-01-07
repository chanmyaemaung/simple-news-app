import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import {
	AppBar,
	CssBaseline,
	IconButton,
	Toolbar,
	Typography,
	Box,
	Tooltip,
} from '@mui/material'
import { root, right } from '../style'
import DashboardDrawer from './DashboardDrawer'
import { useRouter } from 'next/router'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { reloadPage } from '@helper/index'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DashboardIcon from '@mui/icons-material/Dashboard'
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'
import { useGlobalContext } from '@context/authContext'

// * ___main_appbar_function___
export default function DashboardAppBar(props) {
	const { push } = useRouter()

	// from context
	const { logOut, currentUser } = useGlobalContext()

	return (
		<>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar color='inherit'>
					<Toolbar variant='dense' component='div'>
						<Box sx={root}>
							{/* Drawer */}
							<DashboardDrawer />
							<Typography component='div' variant='h5' textAlign='center'>
								{currentUser ? '' : 'Burma News'}
							</Typography>
							<Box sx={right}>
								{/* Add Post */}
								<Tooltip title='Dashboard' placement='left' arrow>
									<IconButton onClick={() => push('/dashboard')}>
										<DashboardIcon />
									</IconButton>
								</Tooltip>
								{/* Add Post */}
								<Tooltip title='Add Post' placement='bottom' arrow>
									<IconButton onClick={() => push('/dashboard/add')}>
										<PostAddIcon />
									</IconButton>
								</Tooltip>
								{/* See All Articles */}
								<Tooltip title='View All Post' placement='bottom' arrow>
									<IconButton
										onClick={() => push('/articles')}
										sx={{ ml: 1 }}
										color='inherit'
									>
										<RemoveRedEyeIcon />
									</IconButton>
								</Tooltip>
								{/* Reload Page */}
								<Tooltip title='Refresh Page' placement='bottom' arrow>
									<IconButton onClick={() => reloadPage()}>
										<RefreshTwoToneIcon />
									</IconButton>
								</Tooltip>
								{/* Sign Out */}
								{currentUser && (
									<>
										<Tooltip title='Sign Out' placement='bottom' arrow>
											<IconButton onClick={logOut}>
												<LogoutTwoToneIcon />
											</IconButton>
										</Tooltip>
									</>
								)}
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</>
	)
}

// * ___Hiding_on_scroll_function___
function HideOnScroll(props) {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

// * ___Hiding_on_scroll_declare_propTypes___
HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
}
