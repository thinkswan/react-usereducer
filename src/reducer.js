import { perPage } from "./allData"
import types from "./types"

export default (state, action) => {
  switch (action.type) {
    case types.start:
      return { ...state, loading: true }
    case types.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length
      }
    default:
      throw new Error("Unknown action")
  }
}
