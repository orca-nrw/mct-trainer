import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import CheckboxList from '../UI/CheckboxList'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  categories: string[]
  selectedCategories: boolean[]
  setSelectedCategories: (selectedCategories: boolean[]) => void
}

export default function CategorySelection({
  categories,
  selectedCategories,
  setSelectedCategories,
}: Props) {
  const navigate = useNavigate()

  function handleStart() {
    if (selectedCategories.every((category) => category === false)) return

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

      <Button
        onClick={handleStart}
        disabled={!selectedCategories.some((category) => category !== false)}
      >
        Test starten
      </Button>
    </div>
  )
}
