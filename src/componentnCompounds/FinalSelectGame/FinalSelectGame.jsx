import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

const { FinalInputSelect, VALUE, LABEL, DISABLE } = stopUndefined(Exports)

const gameOptions = [
	{ [VALUE]: '', [LABEL]: 'Game', [DISABLE]: true },
	{ [VALUE]: '0', [LABEL]: 'Fifa 20' },
	{ [VALUE]: '1', [LABEL]: 'Counter-Strike Global Offensive' },
	{ [VALUE]: '2', [LABEL]: 'League of Legends' },
	{ [VALUE]: '3', [LABEL]: 'Tekken' },
	{ [VALUE]: '4', [LABEL]: 'Warcraft III' },
]

const FINAL_SELECT_GAME = 'Games'

const FinalSelectGame = props => {
	return (
		<FinalInputSelect
			name={FINAL_SELECT_GAME}
			placeholder='Game'
			options={gameOptions}
			{...props}
		/>
	)
}

export { FinalSelectGame, FINAL_SELECT_GAME }
