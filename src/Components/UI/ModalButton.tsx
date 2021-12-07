import React, { useState } from 'react'

interface Props {
  modalText: string
}

export default function ModalButton({ modalText }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  function openModal() {
    setIsVisible(true)
  }

  function closeModal() {
    setIsVisible(false)
  }

  return (
    <>
      <button
        className="px-3 py-1.5 text-gray-800 border border-gray-400 rounded-md bg-gray-50 shadow-sm"
        type="button"
        onClick={openModal}
      >
        Erklärung
      </button>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } fixed z-0 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40`}
      >
        <div className="bg-white mt-6 mx-auto max-w-xl shadow-2xl text-black p-4">
          <div className="flex flex-row justify-between items-center border-b pb-2">
            <h1 className="text-lg font-semibold">Erklärung</h1>
            <span
              className="cursor-pointer select-none font-bold text-3xl text-gray-500"
              onClick={closeModal}
            >
              &times;
            </span>
          </div>
          <div className="py-4 whitespace-pre-line">{modalText}</div>
          <div className="pt-2 flex flex-row justify-end border-t">
            <button
              className="bg-th-violet rounded-md px-3 py-1.5 text-white"
              type="button"
              onClick={closeModal}
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
