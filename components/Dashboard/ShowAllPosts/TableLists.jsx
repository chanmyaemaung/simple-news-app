import {
	Avatar,
	Box,
	IconButton,
	TableCell,
	TableRow,
	Tooltip,
	Typography,
} from '@mui/material'
// All icons
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'

export default function TableLists(props) {
	// Destructuring Data
	const { picture, title, date, viewPost, editPost, deletePost } = props

	return (
		<>
			<TableRow>
				<TableCell component='th' scope='row'>
					<Tooltip title='View Post' arrow>
						<IconButton onClick={() => viewPost()}>
							<Avatar src={picture} />
						</IconButton>
					</Tooltip>
				</TableCell>
				<TableCell align='left'>{date}</TableCell>
				<TableCell align='left'>
					<Typography>{title.slice(0, 20)}</Typography>
				</TableCell>
				<TableCell style={{ width: 160 }} align='right'>
					<Box sx={{ actionsBtn }}>
						<Tooltip title='Edit Post' arrow>
							<IconButton onClick={() => editPost()} color='warning'>
								<EditTwoToneIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='Delete Post' arrow>
							<IconButton onClick={() => deletePost()} color='error'>
								<DeleteOutlineTwoToneIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='View Post' arrow>
							<IconButton onClick={() => viewPost()} color='info'>
								<VisibilityTwoToneIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</TableCell>
			</TableRow>
		</>
	)
}

// style
const actionsBtn = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	padding: '0px',
}
