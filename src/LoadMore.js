import MyContext from "./MyContext"
import React from "react"

export default function LoadMore() {
  const { loadMore } = React.useContext(MyContext)

  return (
    <li>
      <button onClick={loadMore}>Load more</button>
    </li>
  )
}
