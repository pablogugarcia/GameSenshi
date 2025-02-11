import { NavbarIndex, NAVBAR_INDEX_HEIGHT_CHANGED } from './NavbarIndex'
import { StateContainer, storeAlert, STORE_ALERT_STATE_IS_OPEN } from 'state'

const mapStoreAlertStateToProp = {
	[NAVBAR_INDEX_HEIGHT_CHANGED]: STORE_ALERT_STATE_IS_OPEN,
}

const NavbarIndexStoreAlert = StateContainer(
	NavbarIndex,
	[storeAlert],
	[mapStoreAlertStateToProp],
	[]
)

export { NavbarIndexStoreAlert }
