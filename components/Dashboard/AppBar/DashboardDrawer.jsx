import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MenuIcon from '@mui/icons-material/Menu'
import PostAddIcon from '@mui/icons-material/PostAdd'

import { useState, Fragment } from 'react'
import { Divider, IconButton } from '@mui/material'
import { useRouter } from 'next/router'

export default function DashboardDrawer() {
	const { push } = useRouter()

	const [state, setState] = useState({
		left: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button onClick={() => push('/')}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>
				<Divider />
				<ListItem button onClick={() => push('/dashboard/add')}>
					<ListItemIcon>
						<PostAddIcon />
					</ListItemIcon>
					<ListItemText primary='Add Post' />
				</ListItem>
				<Divider />
			</List>
		</Box>
	)

	return (
		<div>
			{['left'].map((anchor) => (
				<Fragment key={anchor}>
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</IconButton>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</Fragment>
			))}
		</div>
	)
}
