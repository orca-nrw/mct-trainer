import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Question from '../../Types/Question'
import PrimaryButton from '../UI/PrimaryButton'
import QuestionEvaluation from '../UI/QuestionEvaluation'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  selectedQuestions: Question[]
  selectedAnswers: string[][]
}

export default function Evaluation({
  selectedQuestions,
  selectedAnswers,
}: Props) {
  // Navigate to category selection if no questions are selected
  const navigate = useNavigate()

  useEffect(() => {
    if (!selectedQuestions || selectedQuestions.length === 0) {
      navigate('/quiz/categories')
    }
  })

  return (
    <div className="space-y-4">
      <TrainerHeader>Evaluation</TrainerHeader>
      {selectedQuestions.map((question, index) => {
        return (
          <QuestionEvaluation
            key={index}
            index={index}
            question={question}
            selectedAnswers={selectedAnswers[index]}
          />
        )
      })}
      <div className="flex justify-center">
        <Link to="/quiz/categories">
          <PrimaryButton>Neuer Test</PrimaryButton>
        </Link>
      </div>
    </div>
  )
}
