import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import CheckboxList from '../UI/CheckboxList'
import TrainerHeader from '../UI/TrainerHeader'

export default function Categories() {
  const [selectedCategories, setSelectedCategories] = useState(
    new Array(5).fill(false)
  )

  return (
    <div className="space-y-4">
      <TrainerHeader>Kategorien</TrainerHeader>
      <p>Wählen Sie die gewünschten Kategorien aus:</p>
      <CheckboxList
        entries={['A', 'B', 'C', 'D', 'E']}
        checked={selectedCategories}
        setChecked={setSelectedCategories}
      />
      <Link to="/quiz">
        <Button>Test starten</Button>
      </Link>
    </div>
  )
}
