import React from "react"

// Create an array of numbers
const allData = new Array(25).fill(0).map((_val, i) => i + 1)
const perPage = 10
const types = {
  start: "START",
  loaded: "LOADED"
}

const reducer = (state, action) => {
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

const MyContext = React.createContext()

function MyProvider({ children }) {
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

function LoadMore() {
  const { loadMore } = React.useContext(MyContext)

  return (
    <li>
      <button onClick={loadMore}>Load more</button>
    </li>
  )
}

function App() {
  const { loading, data, more } = React.useContext(MyContext)

  return (
    <div>
      <ul>
        {data.map(row => (
          <li key={row}>{row}</li>
        ))}

        {loading && <li>Loading...</li>}

        {!loading && more && <LoadMore />}
      </ul>
    </div>
  )
}

export default () => (
  <MyProvider>
    <App />
  </MyProvider>
)
