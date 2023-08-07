import styled from 'styled-components'

export const ExpenseContainer = styled('div')`
  display: flex;
  gap: 1rem;
  color: #c2c3c4;

  p {
    font-size: 0.75rem;
    width: 4rem;
    text-align: left;
    overflow: hidden;
  }
`

export const NewExpenseButton = styled('button')`
  padding: 1rem;
  background-color: #cee7ea;
  color: #1b1f1f;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: #ccd7ff;
    transition: background-color 0.2s;
  }
`
