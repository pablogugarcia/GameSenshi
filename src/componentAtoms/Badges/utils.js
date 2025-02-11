import {
	FB_FS_SENSHI_BADGES_VERIFIED,
	FB_FS_SENSHI_BADGES_FEMALE,
	FB_FS_SENSHI_BADGES_RISING_STAR,
} from 'constantValues'
import { BADGES_COLOR, BADGES_BODY, BADGES_ID, BADGES_TOOLTIP } from './Badges'

const options = [
	{
		[BADGES_ID]: FB_FS_SENSHI_BADGES_FEMALE,
		[BADGES_COLOR]: 'primary',
		[BADGES_BODY]: 'Female',
	},
	{
		[BADGES_ID]: FB_FS_SENSHI_BADGES_VERIFIED,
		[BADGES_COLOR]: 'info',
		[BADGES_BODY]: 'Verified',
	},
	{
		[BADGES_ID]: FB_FS_SENSHI_BADGES_RISING_STAR,
		[BADGES_COLOR]: 'warning',
		[BADGES_BODY]: 'Rising Star',
		[BADGES_TOOLTIP]: 'New player that gain attention fast!',
	},
]

export { options }
