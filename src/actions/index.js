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
