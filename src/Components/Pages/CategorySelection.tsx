import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../UI/PrimaryButton'
import CheckboxList from '../UI/CheckboxList'
import TrainerHeader from '../UI/TrainerHeader'
import { Category } from '../../Types/Category'

interface Props {
  categories: Category[]
  selectedCategories: number[]
  setSelectedCategories: (selectedCategories: number[]) => void
  resetQuestions: () => void
}

export default function CategorySelection({
  categories,
  selectedCategories,
  setSelectedCategories,
  resetQuestions,
}: Props) {
  const navigate = useNavigate()

  function handleStart() {
    if (!selectedCategories) return

    // Reset the selected questions upon starting another quiz
    resetQuestions()

    navigate('/quiz/questions')
  }

  return (
    <div className="space-y-4">
      <TrainerHeader>Kategorien</TrainerHeader>
      <p>Wählen Sie die gewünschten Kategorien aus:</p>

      {/* Only render Checkbox list if the categories are loaded in */}
      {categories ? (
        <CheckboxList
          entries={categories}
          selected={selectedCategories}
          setSelected={setSelectedCategories}
        />
      ) : (
        <p>Loading...</p>
      )}

      <PrimaryButton
        onClick={handleStart}
        disabled={
          !selectedCategories || selectedCategories.length === 0 || !categories
        }
      >
        Test starten
      </PrimaryButton>
    </div>
  )
}
