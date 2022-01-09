/* Deal With Speed Dial */
import SpeedDial from '@mui/material/SpeedDial'
import AssistantDirectionTwoToneIcon from '@mui/icons-material/AssistantDirectionTwoTone'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RefreshIcon from '@mui/icons-material/Refresh'
import { reloadPage } from '@helper/index'
import { useRouter } from 'next/router'

export default function MySpeedDial() {
	// router
	const { push } = useRouter()

	// Define Speed Dial Icons and Names
	const speedDialIcons = [
		{
			icon: <DashboardIcon onClick={() => push('/dashboard')} />,
			name: 'Dashboard',
		},
		{
			icon: <AddCircleIcon onClick={() => push('/dashboard/add')} />,
			name: 'Add Article',
		},
		{ icon: <RefreshIcon onClick={reloadPage} />, name: 'Refresh Page' },
	]

	return (
		<>
			<SpeedDial
				ariaLabel='Show Speed Dial'
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
				icon={<AssistantDirectionTwoToneIcon />}
			>
				{speedDialIcons.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
					/>
				))}
			</SpeedDial>
		</>
	)
}
