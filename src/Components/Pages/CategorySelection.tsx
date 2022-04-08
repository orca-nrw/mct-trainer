import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../UI/PrimaryButton'
import CheckboxList from '../UI/CheckboxList'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  categories: string[]
  selectedCategories: boolean[]
  setSelectedCategories: (selectedCategories: boolean[]) => void
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
    if (selectedCategories.every((category) => category === false)) return

    // Reset the selected questions upon starting another quiz
    resetQuestions()

    navigate('/quiz/questions')
  }

  return (
    <div className="space-y-4">
      <TrainerHeader>Kategorien</TrainerHeader>
      <p>Wählen Sie die gewünschten Kategorien aus:</p>
      <CheckboxList
        entries={categories}
        checked={selectedCategories}
        setChecked={setSelectedCategories}
      />

      <PrimaryButton
        onClick={handleStart}
        disabled={!selectedCategories.some((category) => category !== false)}
      >
        Test starten
      </PrimaryButton>
    </div>
  )
}
