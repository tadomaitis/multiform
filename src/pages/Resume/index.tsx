import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormContext, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { NavigationButton } from '../../components/NavigationButton'

import * as C from './styles'

export const Resume = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useFormContext()

  const requiredData = [state.name, state.email, state.github]

  useEffect(() => {
    if (requiredData.includes('')) {
      navigate(-1)
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4
    })
  }, [])

  const handleGoToStart = () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
    navigate('/')
  }

  return (
    <Theme>
      <C.Container>
        <p>Resumo</p>
        <h1>Parabéns, {state.name}, você concluiu o seu cadastro!</h1>
        <p>Fique de olho no seu e-mail que logo entraremos em contato.</p>
        <hr />
        <h2>Seus dados cadastrados:</h2>
        <p>Nome: {state.name}</p>
        <p>Nível: {state.level}</p>
        <p>Email: {state.email}</p>
        <p>Perfil do Github: {state.github}</p>

        <NavigationButton label='Início' onClick={handleGoToStart} />
      </C.Container>
    </Theme>
  )
}
