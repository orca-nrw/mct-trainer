import React from 'react'
import Question from '../../Types/Question'

interface Props {
  question: Question
  selectedAnswers: string[]
}

export default function QuestionEvaluation({
  question,
  selectedAnswers,
}: Props) {
  return (
    <div>
      <p>{question.text}</p>
      <p>{selectedAnswers.map((answer) => answer)}</p>
    </div>
  )
}
