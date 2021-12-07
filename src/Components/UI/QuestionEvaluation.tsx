import React from 'react'
import Question from '../../Types/Question'
import ButtonModal from './ModalButton'

interface Props {
  question: Question
  selectedAnswers: string[]
  index: number
}

export default function QuestionEvaluation({
  question,
  selectedAnswers,
  index,
}: Props) {
  const isCorrect = question.answers.every(
    (answer, index) => answer.solution === selectedAnswers[index]
  )

  return (
    <div className="border border-gray-300 rounded-md shadow-md">
      <div
        className={`${
          isCorrect ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'
        } px-4 py-2 rounded-t-md border-b border-gray-300 flex justify-between`}
      >
        <h1>{index + 1}. Frage</h1>
        <ButtonModal
          modalText={question.explanation || 'Keine Erklärung vorhanden...'}
        />
      </div>
      <div className="p-4">{question.text}</div>
      <table className="w-full">
        <thead>
          <tr className="border bg-gray-100 text-left">
            <th className="px-4 py-2 border">Antwort</th>
            <th className="px-4 py-2 border">Richtige Lösung</th>
            <th className="px-4 py-2 border">Ihre Lösung</th>
          </tr>
        </thead>
        <tbody>
          {question.answers.map((answer, index) => {
            return (
              <tr className={index % 2 === 1 ? 'bg-gray-50' : ''} key={index}>
                <td className="border px-4 py-2">{answer.text}</td>
                <td className="border px-4 py-2">{answer.solution}</td>
                <td className="border px-4 py-2">{selectedAnswers[index]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
