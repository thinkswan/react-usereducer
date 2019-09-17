import React from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true }
    case "loaded":
      break
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
  const { loading, data } = state

  return (
    <div>
      <ul>
        {loading && <li>Loading...</li>}

        {data.map(row => (
          <li key={row}>{row}</li>
        ))}

        {!loading && (
          <li>
            <button onClick={() => dispatch({ type: "start" })}>
              Load more
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
