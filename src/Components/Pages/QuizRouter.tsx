import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import CategorySelection from './CategorySelection'
import Evaluation from './Evaluation'
import QuestionsContainer from './QuestionsContainer'
import categories from '../../Helper/Categories'
import questions from '../../Helper/Questions'
import _ from 'lodash'
import Question from '../../Types/Question'

export default function QuizRouter() {
  const [selectedCategories, setSelectedCategories] = useState(
    new Array(categories.length).fill(false)
  )

  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [selectedAnswersArrays, setSelectedAnswersArrays] = useState<
    string[][]
  >(new Array(15).fill([]))

  useEffect(() => {
    const filteredQuestions = questions.filter(
      // Check whether the questions category is true in the selected Categories
      (question) => selectedCategories[question.category - 1] === true
    )

    // Draw sample from filteredQuestions
    const newSelectedQuestions = _.sampleSize(filteredQuestions, 15)
    setSelectedQuestions(newSelectedQuestions)

    setSelectedAnswersArrays(
      newSelectedQuestions.map((question) =>
        new Array(question.answers.length).fill('')
      )
    )
  }, [selectedCategories])

  return (
    <Routes>
      <Route
        path="categories"
        element={
          <CategorySelection
            categories={categories.map((categoryObj) => categoryObj.name)}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        }
      />
      <Route
        path="questions"
        element={
          <QuestionsContainer
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswersArrays}
            setSelectedAnswers={setSelectedAnswersArrays}
          />
        }
      />
      <Route path="evaluation" element={<Evaluation />} />
    </Routes>
  )
}
