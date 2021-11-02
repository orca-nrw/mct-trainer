import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function Button({ children }: PropTypes) {
  return (
    <button
      className="mt-12 px-4 py-2 bg-th-red hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer"
      type="button"
    >
      {children}
    </button>
  )
}
