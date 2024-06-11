import React from "react"

const ErrorPage = ({ error, resetErrorBoundary }) => {
  return (
    <main className=" bg-white h-screen flex justify-center items-center">
      <div role="alert" className="text-center">
        <p className="mb-4 text-xl md:text-4xl font-bold">
          Something went wrong
        </p>
        <pre className="mb-4 ">{error.message}</pre>
        <button
          className="border-2 border-black rounded-md p-4 hover:bg-black hover:text-white duration-300 ease-in-out"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </main>
  )
}
export default ErrorPage
