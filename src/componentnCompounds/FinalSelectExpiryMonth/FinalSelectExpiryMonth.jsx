import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, DISABLE } = stopUndefined(Exports)

const FINAL_SELECT_EXPIRY_MONTH = 'expiryMonth'

const monthOptions = [
	{ [VALUE]: '', [LABEL]: 'Month', [DISABLE]: true },
	{ [VALUE]: '01', [LABEL]: 'Jan 01' },
	{ [VALUE]: '02', [LABEL]: 'Feb 02' },
	{ [VALUE]: '03', [LABEL]: 'Mar 03' },
	{ [VALUE]: '04', [LABEL]: 'Apr 04' },
	{ [VALUE]: '05', [LABEL]: 'May 05' },
	{ [VALUE]: '06', [LABEL]: 'Jun 06' },
	{ [VALUE]: '07', [LABEL]: 'Jul 07' },
	{ [VALUE]: '08', [LABEL]: 'Aug 08' },
	{ [VALUE]: '09', [LABEL]: 'Sep 09' },
	{ [VALUE]: '10', [LABEL]: 'Oct 10' },
	{ [VALUE]: '11', [LABEL]: 'Nov 11' },
	{ [VALUE]: '12', [LABEL]: 'Dec 12' },
]

const FinalSelectExpiryMonth = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_EXPIRY_MONTH}
			placeholder='Month'
			options={monthOptions}
			{...props}
		/>
	)
}

export { FinalSelectExpiryMonth, FINAL_SELECT_EXPIRY_MONTH }
