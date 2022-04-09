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
          <div className="flex flex-row items-center" key={index}>
            <input
              type="checkbox"
              name={`checkbox-${index}`}
              id={`checkbox-${index}`}
              checked={selectedAnswers[index] === 'true'}
              onChange={() => handleOnChange(index)}
            />
            <div className="inline-block ml-2">
              <label
                className="whitespace-pre-line"
                htmlFor={`checkbox-${index}`}
              >
                {answer.text}
              </label>
            </div>
          </div>
        )
      })}
    </div>
  )
}
