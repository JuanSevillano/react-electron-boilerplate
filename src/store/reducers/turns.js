import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialTurns = new Array(999).fill().map(t => ({ status: actionTypes.ORDER_FREE }))

const initialState = {
    turns: initialTurns,
    currentTurn: 0
}

const generateTurn = (state, payload) => {
    const number = state.turns.findIndex(t => t.status === actionTypes.ORDER_FREE)
    const updated = [...state.turns]
    updated[number] = { status: actionTypes.ORDER_WAITING }
    return updateObject(state, {
        turns: updated,
        currentTurn: number
    })
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GENERATE_TURN: return generateTurn(state, payload)
        default: return state
    }
}

export default reducer

