import MyContext from "./MyContext"
import { allData, perPage } from "./allData"
import types from "./types"
import reducer from "./reducer"
import React from "react"

export default function MyProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0
  })
  const { loading, more, data, after } = state

  const loadMore = () => {
    dispatch({ type: types.start })

    setTimeout(() => {
      const newData = allData.slice(after, after + perPage)

      dispatch({ type: types.loaded, newData })
    }, 500)
  }

  return (
    <MyContext.Provider value={{ loading, data, more, loadMore }}>
      {children}
    </MyContext.Provider>
  )
}
