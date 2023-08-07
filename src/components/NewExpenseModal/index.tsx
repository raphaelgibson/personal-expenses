import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import { X } from 'phosphor-react'
import * as z from 'zod'
import { Dispatch, SetStateAction, useRef } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import { CloseButton, Content, Overlay } from './styles'
import { ExpenseProps } from '../Expense'

const newExpenseFormSchema = z.object({
  description: z.string(),
  price: z.string().transform((arg) => Number(arg.replace(',', '.'))),
  date: z
    .date()
    .transform((arg) => arg.toLocaleDateString('pt-BR', { timeZone: 'UTC' })),
  author: z.string(),
})

type NewExpenseFormInput = z.infer<typeof newExpenseFormSchema>

export function NewExpenseModal({
  setExpenses,
}: {
  setExpenses: Dispatch<SetStateAction<ExpenseProps[]>>
}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewExpenseFormInput>({
    resolver: zodResolver(newExpenseFormSchema),
  })
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  async function handleCreateNewExpense(data: NewExpenseFormInput) {
    reset()
    setExpenses((state) => [...state, data])

    closeButtonRef?.current?.click()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Novo gasto</Dialog.Title>

        <CloseButton ref={closeButtonRef}>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewExpense)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Valor"
            required
            {...register('price')}
          />
          <Controller
            control={control}
            name="date"
            render={({ field }: any) => (
              <DatePicker
                placeholderText="Selecione uma data"
                onChange={field.onChange}
                selected={field.value}
                locale={ptBR}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          <input
            type="text"
            placeholder="Autor"
            required
            {...register('author')}
          />

          <button type="submit" disabled={isSubmitting}>
            Inserir Gasto
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
