import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Question from '../../Types/Question'
import PrimaryButton from '../UI/PrimaryButton'
import QuestionHandler from '../UI/QuestionHandler'
import QuestionSelector from '../UI/QuestionSelector'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  selectedQuestions: Question[]
  selectedAnswers: string[][]
  setSelectedAnswers: (selectedAnswers: string[][]) => void
}

export default function QuestionsContainer({
  selectedQuestions,
  selectedAnswers,
  setSelectedAnswers,
}: Props) {
  // Navigate to category selection if no questions are selected
  const navigate = useNavigate()

  useEffect(() => {
    if (!selectedQuestions || selectedQuestions.length === 0) {
      navigate('/quiz/categories')
    }
  })

  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="space-y-4">
      <TrainerHeader>Laufendes Quiz</TrainerHeader>
      {!selectedQuestions || selectedQuestions.length === 0 ? (
        <></>
      ) : (
        <>
          <QuestionHandler
            questionList={selectedQuestions}
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
          <QuestionSelector
            numberOfQuestions={selectedQuestions.length}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </>
      )}
      <div className="flex justify-center">
        <PrimaryButton onClick={() => navigate('/quiz/evaluation')}>
          Test beenden
        </PrimaryButton>
      </div>
    </div>
  )
}
