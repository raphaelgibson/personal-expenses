type ExpenseProps = {
  description: string
  price: string
  date: string
  author: string
}

export function Expense ({ description, price, date, author }: ExpenseProps) {
  return (
    <div className="expense">
      <p>{description}</p>
      <p>R$ {price}</p>
      <p>{date}</p>
      <p>{author}</p>
    </div>
  )
}
