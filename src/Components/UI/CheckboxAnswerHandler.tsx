import React from 'react'
import Answer from '../../Types/Answer'

interface Props {
  answers: Answer[]
  selectedAnswers: string[]
  setSelectedAnswers: (selectedAnswers: string[]) => void
}

export default function CheckboxAnswerHandler({
  answers,
  selectedAnswers,
  setSelectedAnswers,
}: Props) {
  function handleOnChange(position: number) {
    const updatedStates = selectedAnswers.map((answer, index) => {
      if (index !== position) return answer

      return answer !== 'true' ? 'true' : 'false'
    })
    setSelectedAnswers(updatedStates)
  }

  return (
    <div className="space-y-2">
      {answers.map((answer, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={`checkbox-${index}`}
              id={`checkbox-${index}`}
              checked={selectedAnswers[index] === 'true'}
              onChange={() => handleOnChange(index)}
            />
            <label className="ml-2" htmlFor={`checkbox-${index}`}>
              {answer.text}
            </label>
          </div>
        )
      })}
    </div>
  )
}
