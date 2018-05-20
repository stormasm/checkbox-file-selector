import { combineReducers } from 'redux'
import { RECEIVE_FILES, ADD_TO_CART } from '../constants/ActionTypes'

const files = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FILES:
      return {
        ...state,
        ...action.files.reduce((obj, file) => {
          obj[file.id] = file
          return obj
        }, {})
      }
    default:
      const { fileId } = action
      if (fileId) {
        return {
          ...state,
          [fileId]: files(state[fileId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FILES:
      return action.files.map(file => file.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getFile = (state, id) =>
  state.byId[id]

export const getVisibleFiles = state =>
  state.visibleIds.map(id => getFile(state, id))
