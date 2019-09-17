import React from "react"

const allData = new Array(25).fill(0).map((_val, i) => i + 1)
const perPage = 10

function App() {
  const [data] = React.useState(allData.slice(0, perPage))

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
