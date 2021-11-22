import React from 'react'
import Question from '../../Types/Question'

interface Props {
  questionList: Question[]
  currentQuestion: number
}

export default function QuestionHandler({
  questionList,
  currentQuestion,
}: Props) {
  return (
    <div className="space-y-8">
      <p>{questionList[currentQuestion].text}</p>
      <div className="space-y-2">
        {questionList[currentQuestion].answers.map((answer, index) => {
          return <p key={index}>{answer.text}</p>
        })}
      </div>
    </div>
  )
}
