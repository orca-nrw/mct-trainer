import React from 'react'
import Answer from '../../Types/Answer'

interface Props {
  answers: Answer[]
}

export default function AnswerHandler({ answers }: Props) {
  return (
    <div className="space-y-2">
      {answers.map((answer, index) => {
        return <p key={index}>{answer.text}</p>
      })}
    </div>
  )
}
