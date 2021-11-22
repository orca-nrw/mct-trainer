import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../UI/PrimaryButton'

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Willkommen!</h1>
      <p className="text-lg text-center">
        Der Multiple-Choice-Test (MCT) enthält mehr als 1300 Fragen zum Thema
        Datenbanken, aus denen 15 Fragen zufällig ausgewählt und bewertet
        werden.
      </p>

      <Link to="/quiz/categories">
        <PrimaryButton>Weiter</PrimaryButton>
      </Link>
    </div>
  )
}
