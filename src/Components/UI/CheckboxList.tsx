import React from 'react'

interface PropTypes {
  entries: string[]
  checked: boolean[]
  setChecked: (newState: Boolean[]) => void
}

export default function CheckboxList({
  entries,
  checked,
  setChecked,
}: PropTypes) {

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    )

    setChecked(updatedCheckedState)
  }

  return (
    <ul>
      {entries.map((value, index) => {
        ;<li key={index}>
          <div>
            <input
              type="checkbox"
              name={value}
              id={`checkbox-${index}`}
              value={value}
              checked={checked[index]}
              onChange={() => handleOnChange(index)}
            />
            <label className="" htmlFor={`checkbox-${index}`}>
              {value}
            </label>
          </div>
        </li>
      })}
    </ul>
  )
}
