import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
`

export const Content = styled(Dialog.Content)`
  min-width: 21rem;
  border-radius: 6px;
  padding: 1.5rem;
  background: #23242a;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input {
      width: 100%;
      border-radius: 6px;
      border: 2px solid #121214;
      background: #121214;
      color: #cee7ea;
      padding: 1rem;

      &::placeholder {
        color: #808182;
      }
      &:focus {
        outline: 0;
        border: 2px solid #f0f791;
      }
    }

    button[type='submit'] {
      padding: 1rem;
      background-color: #cee7ea;
      color: #1b1f1f;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      margin-top: 1.5rem;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: #ccd7ff;
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: #606162;

  &:hover {
    color: #808182;
  }
`
