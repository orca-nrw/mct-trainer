import React from 'react'
import Answer from '../../Types/Answer'

interface Props {
  answers: Answer[]
  selectedAnswers: string[]
  setSelectedAnswers: (selectedAnswers: string[]) => void
}

export default function TextboxAnswerHandler({
  answers,
  selectedAnswers,
  setSelectedAnswers,
}: Props) {
  function handleTextChange(
    changeEvent: React.FormEvent<HTMLInputElement>,
    index: number
  ) {
    const temp = [...selectedAnswers]
    temp[index] = changeEvent.currentTarget.value
    setSelectedAnswers(temp)
  }
  return (
    <div className="space-y-2">
      {answers.map((answer, index) => {
        return (
          <div key={index}>
            <label
              className="mr-2 whitespace-pre-line"
              htmlFor={`textfield-${index}`}
            >
              {answer.text}
            </label>
            <input
              className="border border-black rounded-md"
              id={`textfield-${index}`}
              type="text"
              value={selectedAnswers[index]}
              onChange={(changeEvent: React.FormEvent<HTMLInputElement>) =>
                handleTextChange(changeEvent, index)
              }
            />
          </div>
        )
      })}
    </div>
  )
}
