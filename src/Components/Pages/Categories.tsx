import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import CheckboxList from '../UI/CheckboxList'
import TrainerHeader from '../UI/TrainerHeader'

interface Props {
  categories: string[]
  selectedCategories: boolean[]
  setSelectedCategories: (selectedCategories: boolean[]) => void
}

export default function Categories({
  categories,
  selectedCategories,
  setSelectedCategories,
}: Props) {
  return (
    <div className="space-y-4">
      <TrainerHeader>Kategorien</TrainerHeader>
      <p>Wählen Sie die gewünschten Kategorien aus:</p>
      <CheckboxList
        entries={categories}
        checked={selectedCategories}
        setChecked={setSelectedCategories}
      />
      <Link to="/quiz/questions">
        <Button>Test starten</Button>
      </Link>
    </div>
  )
}
