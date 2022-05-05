import React from "react"
import {Link} from "gatsby"
export default function Home() {
  return <div>        <header
  className={
      "flex justify-between items-center px-4 h-16 bg-gray-900"
  }
>
  <span
      className={
          "text-2xl sm:text-4xl text-white border-b font-sans"
      }
  >
      Todo List.
  </span>
  <Link
      to={`/app/home`}
      className={
          "flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
      }
  >
      Get on with todos
  </Link>
</header>Hello world!</div>
}
