import LoadMore from "./LoadMore"
import MyContext from "./MyContext"
import MyProvider from "./MyProvider"
import React from "react"

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
