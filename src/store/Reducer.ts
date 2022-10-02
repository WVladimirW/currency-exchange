import { dataCurrency, StateAction, dataState } from '../helpers/types'

const SET_DEFAULT_CURRENCY = 'SET_DEFAULT_CURRENCY'


export let initialState: dataState = {
   data: []
}

export function reducer(state: dataState = initialState, action: StateAction | any) {
   switch (action.type) {
      case SET_DEFAULT_CURRENCY:
         return { ...state, data: action.payload }
      default:
         return state
   }
}

export const setDefaultCurrency = (currency: dataCurrency) => ({ type: SET_DEFAULT_CURRENCY, payload: currency })
