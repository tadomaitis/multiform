import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useFormContext } from '../../contexts/FormContext'

type Props = {
  children: ReactNode
}

export const Theme = ({ children }: Props) => {
  const { state } = useFormContext()
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    if (path === '/resume') {
      const requiredData = [state.name, state.email, state.github]
      if (requiredData.includes('')) {
        alert('Por favor, preencha todos os dados.')
        return
      }
    }
    navigate(path)
  }

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title='Pessoal'
              description='Se indentifique'
              icon='profile'
              path='/'
              active={state.currentStep === 1}
              onClick={() => handleNavigate('/')}
            />
            <SidebarItem
              title='Profissional'
              description='Seu nível'
              icon='book'
              path='/step2'
              active={state.currentStep === 2}
              onClick={() => handleNavigate('/step2')}
            />
            <SidebarItem
              title='Contatos'
              description='Como te achar'
              icon='mail'
              path='/step3'
              active={state.currentStep === 3}
              onClick={() => handleNavigate('/step3')}
            />
            <SidebarItem
              title='Concluído'
              description='Cadastro preenchido com sucesso'
              icon='party'
              path='/resume'
              active={state.currentStep === 4}
              onClick={() => handleNavigate('/resume')}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}
