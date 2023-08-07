import { priceFormatter } from '../../utils/formatter'
import { ExpenseContainer } from './styles'

export type ExpenseProps = {
  description: string
  price: number
  date: string
  author: string
}

export function Expense({ description, price, date, author }: ExpenseProps) {
  return (
    <ExpenseContainer>
      <p>{description}</p>
      <p>{priceFormatter.format(price)}</p>
      <p>{date}</p>
      <p>{author}</p>
    </ExpenseContainer>
  )
}
