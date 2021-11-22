import _ from 'lodash'
import React from 'react'
import PrimaryButton from './PrimaryButton'

interface Props {
  numberOfQuestions: number
  currentQuestion: number
  setCurrentQuestion: (currentQuestion: number) => void
}

export default function QuestionSelector({
  numberOfQuestions,
  currentQuestion,
  setCurrentQuestion,
}: Props) {
  function handleBack() {
    if (currentQuestion === 0) return

    setCurrentQuestion(currentQuestion - 1)
  }

  function handleSelect(changeEvent: React.FormEvent<HTMLSelectElement>) {
    setCurrentQuestion(Number(changeEvent.currentTarget.value) - 1)
  }

  function handleNext() {
    if (currentQuestion === numberOfQuestions) return

    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="flex space-x-2 justify-center">
      <PrimaryButton onClick={handleBack} disabled={currentQuestion === 0}>
        Zurück
      </PrimaryButton>
      <select
        className="px-2 py-2 border border-black rounded-md text-lg font-semibold"
        name="currentQuestion"
        aria-label="Current Question"
        onChange={handleSelect}
        value={currentQuestion + 1}
      >
        {_.range(1, numberOfQuestions + 1).map((number) => {
          return (
            <option value={number} key={number}>
              {number}
            </option>
          )
        })}
      </select>
      <PrimaryButton
        onClick={handleNext}
        disabled={currentQuestion + 1 === numberOfQuestions}
      >
        Weiter
      </PrimaryButton>
    </div>
  )
}
