import { getFileData } from "../api/files";
import * as types from '../constants/ActionTypes'

const template =
  "https://api.github.com/repos/stormasm/mui-card-file/contents/src/data/repos";

const receiveFiles = files => ({
  type: types.RECEIVE_FILES,
  files
})

export const getAllFiles = () => dispatch => {
  getFileData(template => {
    dispatch(receiveFiles(template))
  })
}

// all new code should go below here

function requestFiles() {
  return {
    type: types.REQUEST_FILES
  }
}

const receiveFiles = files => ({
  type: types.RECEIVE_FILES,
  files: files
})

export function fetchFilesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchFiles(getState())) {
      return dispatch(fetchFiles())
    }
  }
}

function shouldFetchFiles(state) {
  const files = state.files;
  if (files.isFetching) {
    return false
  } else {
    return true
  }
}

function fetchFiles() {
  return dispatch => {
    dispatch(requestFiles())
    return fetch("https://api.github.com/repos/stormasm/checkbox-file-selector/contents/src/data/repos")
      .then(response => response.json())
      .then(json => dispatch(receiveFiles(json)))
  }
}
