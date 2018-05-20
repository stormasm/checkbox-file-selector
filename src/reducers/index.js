import { combineReducers } from 'redux'
import files, * as fromFiles from './files'

export default combineReducers({
  files
})

const getFile = (state, id) => fromFiles.getFile(state.files, id)
