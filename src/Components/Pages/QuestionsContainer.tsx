import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Question from '../../Types/Question'
import QuestionHandler from '../UI/QuestionHandler'
import QuestionSelector from '../UI/QuestionSelector'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  selectedQuestions: Question[]
}

export default function QuestionsContainer({ selectedQuestions }: Props) {
  // Navigate to category selection if no questions are selected
  const navigate = useNavigate()
  if (!selectedQuestions || selectedQuestions.length === 0) {
    navigate('/quiz/categories')
    return <></>
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="space-y-4">
      <TrainerHeader>Laufendes Quiz</TrainerHeader>
      <QuestionHandler
        questionList={selectedQuestions}
        currentQuestion={currentQuestion}
      />
      <QuestionSelector
        numberOfQuestions={selectedQuestions.length}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  )
}
