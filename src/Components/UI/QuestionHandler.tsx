import React from 'react'
import Question from '../../Types/Question'
import AnswerHandler from './AnswerHandler'

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
      <AnswerHandler answers={questionList[currentQuestion].answers} />
    </div>
  )
}
