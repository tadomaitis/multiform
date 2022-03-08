import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormContext, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { NavigationButton } from '../../components/NavigationButton'

import * as C from './styles'

export const FormStep3 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useFormContext()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [])

  const handleNextStep = () => {
    const requiredData = [state.name, state.email, state.github]

    if (requiredData.includes('')) {
      alert('Preencha os dados')
    } else {
      navigate('/resume')
    }
  }

  const handlePreviousStep = () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
    navigate(-1)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value
    })
  }

  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Legal, {state.name}, onde te achamos?</h1>
        <p>Preenha os campos abaixo para entrarmos em contato.</p>

        <hr />
        <label>
          Qual seu e-mail?
          <input
            type='email'
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual o link do seu Github?
          <input
            type='url'
            value={state.github}
            onChange={handleGithubChange}
            onKeyUp={(event) => event.key === 'Enter' && handleNextStep()}
          />
        </label>

        <NavigationButton label='Voltar' onClick={handlePreviousStep} />
        <NavigationButton label='Resumo' onClick={handleNextStep} />
      </C.Container>
    </Theme>
  )
}
