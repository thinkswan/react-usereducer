import React from "react"

const allData = new Array(25).fill(0).map((_val, i) => i + 1)
const perPage = 10

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true }
    case "loaded":
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

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0
  })
  const { loading, more, data, after } = state

  return (
    <div>
      <ul>
        {loading && <li>Loading...</li>}

        {data.map(row => (
          <li key={row}>{row}</li>
        ))}

        {!loading && (
          <li>
            <button
              onClick={() => {
                dispatch({ type: "start" })

                const newData = allData.slice(after, after + perPage)

                dispatch({ type: "loaded", newData })
              }}
            >
              Load more
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
