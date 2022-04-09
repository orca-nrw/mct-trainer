import React from 'react'

const lastDB1Index = 7

interface PropTypes {
  entries: string[]
  checked: boolean[]
  setChecked: (newState: boolean[]) => void
}

export default function CheckboxList({
  entries,
  checked,
  setChecked,
}: PropTypes) {
  function handleOnChange(position: number) {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    )

    setChecked(updatedCheckedState)
  }

  const db1FullyChecked = checked
    .filter((_, index) => index <= lastDB1Index)
    .every((val) => val === true)
  const db2FullyChecked = checked
    .filter((_, index) => index > lastDB1Index)
    .every((val) => val === true)

  function handleDB1Change() {
    if (db1FullyChecked) {
      // Toggle off
      const oldState = [...checked]
      const newState = oldState.map((isChecked, index) =>
        index <= lastDB1Index ? false : isChecked
      )
      setChecked(newState)
    } else {
      // Toggle on
      const oldState = [...checked]
      const newState = oldState.map((isChecked, index) =>
        index <= lastDB1Index ? true : isChecked
      )
      setChecked(newState)
    }
  }

  function handleDB2Change() {
    if (db2FullyChecked) {
      // Toggle off
      const oldState = [...checked]
      const newState = oldState.map((isChecked, index) =>
        index > lastDB1Index ? false : isChecked
      )
      setChecked(newState)
    } else {
      // Toggle on
      const oldState = [...checked]
      const newState = oldState.map((isChecked, index) =>
        index > lastDB1Index ? true : isChecked
      )
      setChecked(newState)
    }
  }

  return (
    <ul className="select-none">
      {/* Category Checkboxes */}
      {entries.map((value, index) => {
        return (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                name={value}
                id={`checkbox-${index}`}
                value={value}
                checked={checked[index]}
                onChange={() => handleOnChange(index)}
              />
              <label className="ml-2" htmlFor={`checkbox-${index}`}>
                {value}
              </label>
            </div>
          </li>
        )
      })}
      {/* Toggle groups */}
      <li className="mt-4">
        <div>
          <input
            type="checkbox"
            name="DB 1"
            id={`checkbox-db-1`}
            checked={db1FullyChecked}
            onChange={handleDB1Change}
          />
          <label className="ml-2" htmlFor={`checkbox-db-1`}>
            Datenbanken 1
          </label>
        </div>
      </li>
      <li>
        <div>
          <input
            type="checkbox"
            name="DB 2"
            id={`checkbox-db-2`}
            checked={db2FullyChecked}
            onChange={handleDB2Change}
          />
          <label className="ml-2" htmlFor={`checkbox-db-2`}>
            Datenbanken 2
          </label>
        </div>
      </li>
    </ul>
  )
}
