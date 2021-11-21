import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Categories from './Categories'
import Evaluation from './Evaluation'
import QuestionsContainer from './QuestionsContainer'

const categories = ['A', 'B', 'C', 'D', 'E']

export default function QuizRouter() {
  const [selectedCategories, setSelectedCategories] = useState(
    new Array(categories.length).fill(false)
  )

  return (
    <Routes>
      <Route
        path="categories"
        element={
          <Categories
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        }
      />
      <Route path="questions" element={<QuestionsContainer />} />
      <Route path="evaluation" element={<Evaluation />} />
    </Routes>
  )
}
