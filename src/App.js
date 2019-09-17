import React from "react"

const allData = new Array(25).fill(0).map((_val, i) => i + 1)
const perPage = 10

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      break
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

  return (
    <div>
      <ul>
        {data.map(row => (
          <li key={row}>{row}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
