import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    orders: []
}

const generateTurn = (state, payload) => {
    const generatedNumber = Math.random() * 100
    const orders = [...state.orders]
    orders[generatedNumber] = { status: actionTypes.ORDER_WAITING }
    console.log('generatedNumber: ', generatedNumber)
    console.log('updated Orders: ', orders)
    return updateObject(state)
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GENERATE_TURN: return generateTurn(state, payload)
        default: return state
    }
}

export default reducer

