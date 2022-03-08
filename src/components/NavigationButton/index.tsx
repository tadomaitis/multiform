import * as C from './styles'

type Props = {
  label: string
  onClick: () => void
}

export const NavigationButton = ({ label, onClick }: Props) => {
  return <C.NavigationButton onClick={onClick}>{label}</C.NavigationButton>
}
