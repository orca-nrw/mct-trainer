import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Question from '../../Types/Question'
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
    </div>
  )
}
