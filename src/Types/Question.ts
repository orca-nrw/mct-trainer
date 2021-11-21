export default interface Question {
  id: number
  category: number
  difficulty: number
  text: string
  explanation?: string
  type: 'multiple-choice' | 'text'
  answers: {
    text: string
    solution: string
  }[]
}
