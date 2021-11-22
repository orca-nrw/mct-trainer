import React from 'react'
import Question from '../../Types/Question'
import CheckboxAnswerHandler from './CheckboxAnswerHandler'
import TextboxAnswerHandler from './TextboxAnswerHandler'

interface Props {
  questionList: Question[]
  currentQuestion: number
  selectedAnswers: string[][]
  setSelectedAnswers: (selectedAnswers: string[][]) => void
}

export default function QuestionHandler({
  questionList,
  currentQuestion,
  selectedAnswers,
  setSelectedAnswers,
}: Props) {
  function setSelectedAnswersIndexed(
    selectedSubAnswers: string[],
    index: number
  ) {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[index] = selectedSubAnswers
    setSelectedAnswers(newSelectedAnswers)
  }

  return (
    <div className="space-y-8">
      <p>{questionList[currentQuestion].text}</p>
      {questionList[currentQuestion].type === 'multiple-choice' ? (
        <CheckboxAnswerHandler
          answers={questionList[currentQuestion].answers}
          selectedAnswers={selectedAnswers[currentQuestion]}
          setSelectedAnswers={(selectedSubAnswers: string[]) =>
            setSelectedAnswersIndexed(selectedSubAnswers, currentQuestion)
          }
        />
      ) : (
        <TextboxAnswerHandler
          answers={questionList[currentQuestion].answers}
          selectedAnswers={selectedAnswers[currentQuestion]}
          setSelectedAnswers={(selectedSubAnswers: string[]) =>
            setSelectedAnswersIndexed(selectedSubAnswers, currentQuestion)
          }
        />
      )}
    </div>
  )
}
