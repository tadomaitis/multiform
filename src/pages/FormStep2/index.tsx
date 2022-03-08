import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useFormContext, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { SelectOption } from '../../components/SelectOption'
import { NavigationButton } from '../../components/NavigationButton'

export const FormStep2 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useFormContext()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handlePreviousStep = () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
    navigate(-1)
  }

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step3')
    } else {
      alert('Preencha os dados')
    }
  }

  const handleSetLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name}, o que melhor descreve sua experiência?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente
        </p>
        <hr />
        <SelectOption
          title='Sou iniciante'
          description='Comecei a programar há menos de 2 anos'
          icon='👶'
          selected={state.level === 0}
          onClick={() => handleSetLevel(0)}
        />
        <SelectOption
          title='Sou programador'
          description='Já programo há 2 anos ou mais'
          icon='🤓'
          selected={state.level === 1}
          onClick={() => handleSetLevel(1)}
        />
        <NavigationButton label='Voltar' onClick={handlePreviousStep} />
        <NavigationButton label='Próximo' onClick={handleNextStep} />
      </C.Container>
    </Theme>
  )
}
