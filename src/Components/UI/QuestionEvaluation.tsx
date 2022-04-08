import React from 'react'
import Question from '../../Types/Question'
import ButtonModal from './ModalButton'
import levenshtein from 'damerau-levenshtein'

interface Props {
  question: Question
  selectedAnswers: string[]
  index: number
}

function evaluateQuestion(
  question: Question,
  selectedAnswers: string[]
): 'correct' | 'probably-correct' | 'false' {
  // Handle Text Questions using the damerau-levenshtein-algorithm to allow very similar strings to pass
  // Multiple Choice questions can be handled in this way too since the stringified booleans always fall outside the probably correct spectrum
  const similarities = question.answers.map((answer, index) => {
    return levenshtein(
      answer.solution.toLowerCase(),
      selectedAnswers[index].toLowerCase()
    ).similarity
  })

  // Fuzzy logic to handle uncertain answers
  if (similarities.every((similarity) => similarity === 1.0)) {
    return 'correct'
  } else if (similarities.every((similarity) => similarity > 0.85)) {
    return 'probably-correct'
  } else return 'false'
}

export default function QuestionEvaluation({
  question,
  selectedAnswers,
  index,
}: Props) {
  const evaluationResult = evaluateQuestion(question, selectedAnswers)
  const evaluationColor =
    evaluationResult === 'correct'
      ? 'bg-green-200 text-green-900'
      : evaluationResult === 'probably-correct'
      ? 'bg-yellow-200 text-yellow-900'
      : 'bg-red-200 text-red-900'

  return (
    <div className="border border-gray-300 rounded-md shadow-md">
      <div
        className={`${evaluationColor} px-4 py-2 rounded-t-md border-b border-gray-300 flex justify-between`}
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
