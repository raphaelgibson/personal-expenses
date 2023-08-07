import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Expense, ExpenseProps } from './components/Expense'
import { NewExpenseButton } from './components/Expense/styles'
import { NewExpenseModal } from './components/NewExpenseModal'
import { priceFormatter } from './utils/formatter'
import './styles.css'

export function App() {
  const [expenses, setExpenses] = useState<ExpenseProps[]>([])
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.price,
    0,
  )

  return (
    <>
      <header>
        <h1>Gastos Pessoais</h1>
      </header>
      <div className="container">
        <h2>Gastos Previstos - Agosto</h2>
        <h3>{priceFormatter.format(totalExpenses)}</h3>
        <div className="expenses">
          <div className="expense-h">
            <p>Descrição</p>
            <p>Valor</p>
            <p>Data</p>
            <p>Autor</p>
          </div>
          {expenses.map((expense, index) => {
            return <Expense key={index} {...expense} />
          })}
          {/* <Expense
            description="Luz"
            price="300,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          /> */}
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewExpenseButton>Inserir Novo Gasto</NewExpenseButton>
          </Dialog.Trigger>

          <NewExpenseModal setExpenses={setExpenses} />
        </Dialog.Root>
      </div>
    </>
  )
}
