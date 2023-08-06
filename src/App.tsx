import { Expense } from './components/Expense'
import './styles.css'

export function App() {
  return (
    <>
      <header>
        <h1>Personal Expenses</h1>
      </header>
      <div className="container">
        <h2>Gastos Previstos - Agosto</h2>
        <h3>R$ 335,00</h3>
        <div className="expenses">
          <div className="expense-h">
            <p>Descrição</p>
            <p>Valor</p>
            <p>Data</p>
            <p>Autor</p>
          </div>
          <Expense
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
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
          <Expense
            description="Água"
            price="35,00"
            date="06/08/2023"
            author="Pessoal"
          />
        </div>
        <button>Inserir Novo Gasto</button>
      </div>
    </>
  )
}
