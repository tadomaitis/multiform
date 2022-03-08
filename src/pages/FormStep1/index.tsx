import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useFormContext, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useFormContext()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2')
    } else {
      alert('Preencha os dados')
    }
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: event.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preenha o campo abaixo com seu nome completo</p>

        <hr />
        <label>
          Seu nome completo
          <input
            type='text'
            autoFocus
            onChange={handleNameChange}
            onKeyUp={(event) => event.key === 'Enter' && handleNextStep()}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}
